import { H2 } from "tamagui";

export const ProfileLogin = ({ login }: { login: string }) => {
  return (
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
  );
};
