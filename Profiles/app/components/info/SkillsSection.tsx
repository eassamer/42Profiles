import { ProjectData, Skill, STATUS_POJECT } from "@/app/utils";
import { Button, H5, ScrollView, Tabs, Text, View } from "tamagui";
import { Timer } from "@tamagui/lucide-icons";
export const MarkSection = ({ projects }: { projects?: Skill[] }) => {
  return (
    <Tabs.Content value="tab2" width={"100%"} height={300}>
      <ScrollView width={"100%"} height={"100%"} flexDirection="column">
        {projects?.map((project, index) => (
          <View
            key={index}
            px={20}
            height={35}
            width={"100%"}
            flexDirection="row"
            ai={"center"}
            jc={"space-between"}
          >
            <H5 fontWeight={"bold"} fontSize={12}>
              {project.name}
            </H5>
            <Text
              fontWeight={"bold"}
              color={(project.level as number) < 0 ? "red" : "green"}
            >
              {project.level}
            </Text>
          </View>
        ))}
      </ScrollView>
    </Tabs.Content>
  );
};
