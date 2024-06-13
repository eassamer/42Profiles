import axios from "axios";

export const useGetUserByLogin = async (login: string, token: string) => {
  try {
    const { data } = await axios.get(
      `https://api.intra.42.fr/v2/campus/16/users?range[login]=${login},${login}zzz`,
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
