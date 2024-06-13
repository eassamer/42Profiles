import { ProjectData, STATUS_POJECT } from "@/app/utils";
import { Button, H5, ScrollView, Tabs, Text, View } from "tamagui";
import { Timer } from "@tamagui/lucide-icons";
export const MarkSection = ({ projects }: { projects?: ProjectData[] }) => {
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
              {project.project.name}
            </H5>
            {project.status != STATUS_POJECT.IN_PROGRESS ? (
              <Text
                fontWeight={"bold"}
                color={(project.final_mark as number) < 0 ? "red" : "green"}
              >
                {project.final_mark}
              </Text>
            ) : (
              <Button
                icon={Timer}
                scaleIcon={1.4}
                backgroundColor={"white"}
                width={"fit-content"}
                disabled
                p
              ></Button> 
            )}
          </View>
        ))}
      </ScrollView>
    </Tabs.Content>
  );
};
