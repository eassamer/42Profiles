import { useLocalSearchParams } from "expo-router";

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
import React, { useEffect, useState } from "react";
import { ProfileData, token } from "../utils";
import { InfoSection } from "../components/info/InfoSection";
import { MarkSection } from "../components/info/MarkSection";
export default function Profile() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<ProfileData>({
    id: 0,
    login: "",
    usual_full_name: "",
    image: {
      link: "",
      versions: {
        large: "",
        medium: "",
        small: "",
        micro: "",
      },
    },
    correction_point: 2,
    wallet: 0,
    email: "",
    location: "",
    first_name: "",
    last_name: "",
    pool_month: "",
  });

  useEffect(() => {
    (async () => {
      const data = await fetch(`https://api.intra.42.fr/v2/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        credentials: "include",
        redirect: "follow",
        referrerPolicy: "no-referrer",
      }).then((response) => {
        return response.json();
      });

      setData(data);
    })();
  }, [id]);
  const color = "#00babc";

  const {
    login,
    usual_full_name,
    image,
    cursus_users,
    email,
    location,
    wallet,
  } = data;
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
            uri: image.link,
            width: 200,
            height: 200,
          }}
          style={{
            borderRadius: 20,
            border: "2px solid white",
          }}
        ></Image>
        <H2
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          {usual_full_name}
        </H2>
        <H2
          style={{
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          @{login}
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
            {cursus_users?.[1].level?.toFixed(2)}%
          </Text>
          <View
            style={{
              position: "absolute",
              width: ((cursus_users?.[1].level as number) % 1) * 100 + "%",
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
          height={"auto"}
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
          <InfoSection
            email={email}
            wallet={wallet}
            cursus_users={cursus_users}
            location={location}
            color={color}
          />
          <MarkSection projects={data?.projects_users} />
          <Tabs.Content value="tab3" width={"100%"} ai={"center"} jc={"center"}>
            <H5>Skills</H5>
          </Tabs.Content>
        </Tabs>
      </View>
    </YStack>
  );
}
