import axios from "axios";
import { getValueFor } from "../utils";

export const getUserDataByProfile = async (value: string) => {
  try {
    const token = await getValueFor("token");

    const { data } = await axios.get(
      `https://api.intra.42.fr/v2/campus/16/users?filter[login]=${value}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDataById = async (id: string, token: string) => {
  try {


    const { data } = await axios.get(`https://api.intra.42.fr/v2/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
