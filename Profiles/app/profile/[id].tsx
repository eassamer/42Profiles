import { useLocalSearchParams } from "expo-router";

import { View, YStack, Tabs, SizableText, Separator } from "tamagui";

import React, { useEffect, useState } from "react";
import { getValueFor, ProfileData, Skill } from "../utils";
import { InfoSection } from "../components/info/InfoSection";
import { MarkSection } from "../components/info/MarkSection";
import axios from "axios";
import { SkillSection } from "../components/info/SkillsSection";
import { ProfileImage } from "../components/ProfileImage";
import { ProfileName } from "../components/ProfileName";
import { ProfileLogin } from "../components/ProfileLogin";
import { ProfileLevel } from "../components/ProfileLevel";
import { HeaderProfile } from "../components/HeaderProfile";
import { useGetUserById } from "../api/useGetUserById";
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
    const fetchUser = async () => {
      try {
        const token = await getValueFor("token");

        const data = await useGetUserById(Number(id), token as string);

        setData(data as ProfileData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  const color = "#b61282";

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
        style={{
          width: "100%",
          height: "100%",
          padding: 20,
        }}
      >
        <HeaderProfile />
        <ProfileImage image={image.link} />
        <ProfileName name={usual_full_name} />
        <ProfileLogin login={login} />
        <ProfileLevel level={cursus_users?.[1]?.level || 0} color={color} />
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
            cursus_users={cursus_users || []}
            location={location}
            color={color}
          />
          <MarkSection projects={data?.projects_users} />
          <SkillSection Cursus={data?.cursus_users || []} />
        </Tabs>
      </View>
    </YStack>
  );
}
