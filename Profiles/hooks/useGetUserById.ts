import axios from "axios";

export const useGetUserById = async (id: number, token: string) => {
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
