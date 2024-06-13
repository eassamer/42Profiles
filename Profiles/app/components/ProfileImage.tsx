import { Image } from "tamagui";

export const ProfileImage = ({ image }: { image: string }) => {
  return (
    <Image
      source={{
        uri: image,
        width: 200,
        height: 200,
      }}
      style={{
        borderRadius: 20,
        border: "2px solid white",
      }}
    ></Image>
  );
};
