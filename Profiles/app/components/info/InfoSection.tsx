import { Tabs, Text, H5 } from "tamagui";

export const InfoSection = ({
  email,
  wallet,
  cursus_users,
  location,
  color,
}: {
  email: string;
  wallet: number;
  cursus_users?: {
    grade?: string;
    level?: number;
    skills?: {
      id?: number;
      name: string;
      level: number;
    }[];
  }[];
  location?: string;
  color: string;
}) => {
  return (
    <Tabs.Content
      value="tab1"
      width={"100%"}
      ai={"center"}
      jc={"center"}
      gap={10}
      py={14}
    >
      <Text
        style={{
          color: "black",
          fontSize: 18,
        }}
      >
        Email : <span style={{ color: color }}>{email}</span>
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 18,
        }}
      >
        Wallet: <span style={{ color: color }}>{wallet}₳</span>
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 18,
        }}
      >
        Grade:
        <span style={{ color: color }}> {cursus_users?.[1].grade}</span>
      </Text>

      <H5
        style={{
          color: color,
          textDecorationLine: "underline",
          textDecorationColor: color,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "$body",
          letterSpacing: 1,
        }}
      >
        {location || "Unavailable"}
      </H5>
    </Tabs.Content>
  );
};
