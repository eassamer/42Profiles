import { View, Button, H2 } from "tamagui";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { router } from "expo-router";
export const HeaderProfile = () => {
  return (
    <View
      ai={"center"}
      jc={"center"}
      flexDirection="row"
      px={20}
      py={30}
      style={{
        width: "100%",
        height: 50,
        position: "relative",
      }}
    >
      <Button
        style={{
          position: "absolute",
          left: 20,
        }}
        icon={ArrowLeft}
        onPress={() => router.back()}
      ></Button>
      <H2
        style={{
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        Profile
      </H2>
    </View>
  );
};
