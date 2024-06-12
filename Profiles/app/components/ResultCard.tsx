import { Avatar, View, Text } from "tamagui";
import { ProfileData } from "../utils";
import { router } from "expo-router";
export const ResultCard = ({ profileData }: { profileData: ProfileData }) => {
  const { id, login, usual_full_name, image } = profileData;
  const color = "#2b6cb0";
  return (
    <View
      flexDirection="row"
      gap={10}
      style={{
        width: "100%",
        height: 90,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 18,

        alignItems: "center",
        justifyContent: "flex-start",
      }}
      onPress={() => router.push(`/profile/${id}`)}
    >
      <Avatar circular size="$6">
        <Avatar.Image accessibilityLabel="Cam" src={image.link} />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
      <View
        flexDirection="column"
        ai={"flex-start"}
        jc={"space-between"}
        style={{
          height: "100%",
          width: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {usual_full_name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: color,
          }}
        >
          {login}
        </Text>
      </View>
    </View>
  );
};
