import { View, Text, YStack, Button, Image } from "tamagui";
import { LogIn } from "@tamagui/lucide-icons";
import { Link, router } from "expo-router";
import { StyleSheet } from "react-native";
import { getValueFor, save } from "./utils";
import { useEffect, useState } from "react";
export default function App() {
  useEffect(() => {
    const fetchToken = async () => {
      try {
        await save();
      } catch (error) {
        console.log(error);
      }
    };

    fetchToken();
  }, []);

  return (
    <YStack
      style={{ height: "100%", width: "100%", backgroundColor: "#060317" }}
    >
      {/* Put a header with a box show inside of it a logo */}
      <View
        ac={"center"}
        jc={"center"}
        flexDirection="column"
        gap={50}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          alt="logo"
          alignSelf="center"
          source={{
            uri: "https://iili.io/JyMNv1I.png",
            width: 200,
            height: 100,
          }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          Welcome to the 42 Profiles app
        </Text>
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
          Welcome
        </Button>
        <Link href="/SearchUser" style={styles.link}>
          Github
        </Link>
      </View>
    </YStack>
  );
}

const styles = StyleSheet.create({
  link: {
    position: "absolute",
    bottom: 100,
    paddingVertical: 8,
    color: "white",
    alignSelf: "center",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});
