import { View, Text } from "tamagui";

export const ProfileLevel = ({
  level,
  color,
}: {
  level: number;
  color: string;
}) => {
  return (
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
          color: "#fff",
          zIndex: 1,
          position: "absolute",
        }}
      >
        {level?.toFixed(2)}%
      </Text>
      <View
        style={{
          position: "absolute",
          width: ((level as number) % 1) * 100 + "%",
          height: "100%",
          borderRadius: 1,
          backgroundColor: color,
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      ></View>
    </View>
  );
};
