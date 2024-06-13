import { Cursus, ProjectData, Skill, STATUS_POJECT } from "@/app/utils";
import { Button, H5, ScrollView, Tabs, Text, View } from "tamagui";
import { Timer } from "@tamagui/lucide-icons";
import { useState } from "react";

const getSkills = (cursus: Cursus[]) => {
  let skills: Skill[] = [];
  cursus.forEach((cursus) => {
    cursus.skills?.forEach((skill) => {
      skills.push(skill);
    });
  });
  return skills;
};

export const SkillSection = ({ Cursus }: { Cursus?: Cursus[] }) => {
  const skills = getSkills(Cursus || []);

  return (
    <Tabs.Content value="tab3" width={"100%"} height={300}>
      <ScrollView width={"100%"} height={"100%"} flexDirection="column">
        {skills?.map((skill, index) => (
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
              {skill.name}
            </H5>
            <Text
              fontWeight={"bold"}
              color={(skill.level as number) < 0 ? "red" : "green"}
            >
              {skill.level.toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </Tabs.Content>
  );
};
