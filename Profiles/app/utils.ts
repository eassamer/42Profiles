import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import axios from "axios";

export async function save() {
  try {
    const form = new FormData();
    form.append("grant_type", "client_credentials");
    form.append("client_id", process.env.EXPO_PUBLIC_CLIENT_ID as string);
    form.append(
      "client_secret",
      process.env.EXPO_PUBLIC_CLIENT_SECRET as string
    );

    const res = await axios.post("https://api.intra.42.fr/oauth/token", form);

    Platform.OS == "web"
      ? localStorage.setItem("token", res.data.access_token)
      : await SecureStore.setItemAsync("token", res.data.access_token);
  } catch (error) {
    console.log(error);
  }
}

export async function getValueFor(key: string) {
  if (Platform.OS == "web") {
    let result = localStorage.getItem(key);
    if (result) {
      return result;
    }
  } else {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    }
  }
  return null;
}

export interface ProfileData {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  location?: string;
  usual_full_name: string;
  image: {
    link: string;
    versions: {
      large: string;
      medium: string;
      small: string;
      micro: string;
    };
  };
  cursus_users?: {
    grade?: string;
    level?: number;
    skills?: Skill[];
  }[];
  projects_users?: ProjectData[];
  staff?: boolean;
  correction_point: number;
  pool_month: string;
  wallet: number;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}
export interface ProjectData {
  id: number;
  final_mark?: number;
  status?: string;
  validated?: boolean;
  project: {
    id: number;
    name: string;
    slug: string;
    parent_id?: number;
  };
}

export const STATUS_POJECT = {
  IN_PROGRESS: "in_progress",
  VALIDATED: "validated",
  WAITING_VALIDATION: "waiting_for_correction",
};
