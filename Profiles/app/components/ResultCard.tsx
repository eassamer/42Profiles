import { Avatar, View, Text } from "tamagui";
import { ProfileData } from "../utils";
export const ResultCard = ({ profileData }: { profileData: ProfileData }) => {
  const { name, login, id, Level, percentage, image, color } = profileData;
  return (
    <View
      flexDirection="row"
      gap={10}
      style={{
        width: "100%",
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 18,

        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Avatar circular size="$6">
        <Avatar.Image accessibilityLabel="Cam" src={image} />
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
          {name}
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
        <View
          ai={"center"}
          jc={"center"}
          style={{
            width: "100%",
            height: 20,
            borderRadius: 5,
            backgroundColor: "transparent",
            border: "1px solid",
            borderColor: color,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#000",
              zIndex: 1,
              position: "absolute",
            }}
          >
            {Level} - {percentage}%
          </Text>
          <View
            style={{
              position: "absolute",
              width: `${percentage}%`,
              height: "100%",
              borderRadius: 1,
              backgroundColor: color,
              left: 0,
              top: 0,
              zIndex: 0,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};
