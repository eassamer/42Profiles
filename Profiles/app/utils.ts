import * as SecureStore from "expo-secure-store";

// export async function save(key: string) {
//   const token = await fetch("https://api.intra.42.fr/oauth/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data.access_token;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   await SecureStore.setItemAsync(key, token);
// }

// export async function getValueFor(key: string) {
//   let result = await SecureStore.getItemAsync(key);
//   if (result) {
//     return result;
//   }
//   return null;
// }

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
    skills?: {
      id?: number;
      name: string;
      level: number;
    }[];
  }[];
  projects_users?: ProjectData[];
  staff?: boolean;
  correction_point: number;
  pool_month: string;
  wallet: number;
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
export const token =
  "bd769b68a35bdecf2fa2212d645a7ef3cf380d0b97cfa0f8d5df0b518f15b6e6";

export const STATUS_POJECT = {
  IN_PROGRESS: "in_progress",
  VALIDATED: "validated",
};
