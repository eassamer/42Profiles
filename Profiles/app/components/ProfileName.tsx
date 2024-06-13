import { H2 } from "tamagui";

export const ProfileName = ({ name }: { name: string }) => {
  return (
    <H2
      style={{
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        letterSpacing: "1px",
      }}
    >
      {name}
    </H2>
  );
};
