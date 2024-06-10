import { View, Text, YStack, Button } from "tamagui";
import { LogIn } from "@tamagui/lucide-icons";
import { router } from "expo-router";
export default function Index() {
  return (
    <YStack
      style={{ height: "100%", width: "100%", backgroundColor: "#060317" }}
    >
      {/* Put a header with a box show inside of it a logo */}
      <View
        ai={"center"}
        jc={"center"}
        style={{
          width: "100%",
          height: "80px",
        }}
      >
        <Text style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
          42 Profiles
        </Text>
      </View>
      <View
        ac={"center"}
        jc={"center"}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Button
          alignSelf="center"
          iconAfter={LogIn}
          size="$7"
          w={"50%"}
          h={"70px"}
          onPress={() => {
            router.push("/SearchUser");
          }}
        >
          Sign In
        </Button>
      </View>
    </YStack>
  );
}
