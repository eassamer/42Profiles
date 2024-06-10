import {
  View,
  YStack,
  H2,
  Text,
  Button,
  Image,
  Tabs,
  SizableText,
  Separator,
  H5,
} from "tamagui";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import React from "react";
export default function Profile() {
  const color = "#00babc";
  return (
    <YStack
      style={{ height: "100%", width: "100%", backgroundColor: "#060317" }}
    >
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
        <H2 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
          Profile
        </H2>
      </View>
      <View
        ai={"center"}
        style={{
          width: "100%",
          height: "100%",
          padding: 20,
        }}
      >
        <Image
          source={{
            uri: "https://cdn.intra.42.fr/users/4a53b2f42d02de287e71eb4c6d8a9d1c/eassamer.jpg",
            width: 200,
            height: 200,
          }}
          style={{
            borderRadius: 20,
            border: "2px solid white",
          }}
        ></Image>
        <H2 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
          El mehdi Assamer
        </H2>
        <H2 style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>
          @Eassamer
        </H2>
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
            13 - 78%
          </Text>
          <View
            style={{
              position: "absolute",
              width: "78%",
              height: "100%",
              borderRadius: 1,
              backgroundColor: color,
              left: 0,
              top: 0,
              zIndex: 0,
            }}
          ></View>
        </View>
        <Tabs
          defaultValue="tab1"
          orientation="horizontal"
          flexDirection="column"
          width={"100%"}
          height={300}
          borderRadius="$4"
          borderWidth="$0.25"
          overflow="hidden"
          borderColor="$borderColor"
          backgroundColor={"white"}
          mt={20}
        >
          <Tabs.List
            disablePassBorderRadius="bottom"
            aria-label="Manage your account"
          >
            <Tabs.Tab flex={1} value="tab1">
              <SizableText fontFamily="$body">Profile</SizableText>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab2">
              <SizableText fontFamily="$body">Marks</SizableText>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab3">
              <SizableText fontFamily="$body">Skills</SizableText>
            </Tabs.Tab>
          </Tabs.List>
          <Separator />
          <Tabs.Content value="tab1" width={"100%"} ai={"center"} jc={"center"}>
            <H5>Profile</H5>
          </Tabs.Content>

          <Tabs.Content value="tab2" width={"100%"} ai={"center"} jc={"center"}>
            <H5>Marks</H5>
          </Tabs.Content>

          <Tabs.Content value="tab3" width={"100%"} ai={"center"} jc={"center"}>
            <H5>Skills</H5>
          </Tabs.Content>
        </Tabs>
      </View>
    </YStack>
  );
}
