import { View, Text, YStack, Input, XStack, Button, Avatar } from "tamagui";
import { Search } from "@tamagui/lucide-icons";
import React, { useEffect } from "react";
import { router } from "expo-router";
import { getValueFor, ProfileData } from "./utils";
import { ResultCard } from "./components/ResultCard";

export default function SearchUser() {
  const [value, setValue] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const [data, setData] = React.useState<ProfileData[]>([]);
  const [token, setToken] = React.useState<string | null>("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await getValueFor("token");
        setToken(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchToken();
  }, []);

  const handlePress = async () => {
    if (value === "") {
      setShowError(true);
    } else {
      setShowError(false);
      const data = await fetch(
        `https://api.intra.42.fr/v2/campus/16/users?filter[login]=${value}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          credentials: "include",
          redirect: "follow",
          referrerPolicy: "no-referrer",
        }
      )
        .then((response) => {
          return response.json();
        })
        .catch((error) => console.log("ERROR: ", error.message));

      setData(data);
    }
  };
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
        ai={"center"}
        flexDirection="column"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <XStack alignItems="center" space={22} w="100%" px={20}>
          <Input
            flex={1}
            size={"$5"}
            placeholder="Search by login"
            value={value}
            onChangeText={setValue}
          />
          <Button
            size={"$5"}
            icon={Search}
            onPress={() => handlePress()}
          ></Button>
        </XStack>
        {showError && (
          <Text
            color="red"
            style={{
              alignSelf: "center",
              marginTop: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Please enter a login!
          </Text>
        )}
        <View
          style={{
            width: "100%",
            height: "80%",
            padding: 20,
            justifyContent: data.length != 0 ? "flex-start" : "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          {data.length === 0 && (
            <Text
              color="white"
              style={{
                alignSelf: "center",
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              No result
            </Text>
          )}
          {data.map((item, index) => (
            <ResultCard key={index} profileData={item} />
          ))}
        </View>
      </View>
    </YStack>
  );
}
