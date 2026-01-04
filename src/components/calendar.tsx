import { FC } from "react";
import { Heading, Separator, Text } from "@chakra-ui/react";

export const Calendar: FC = () => {
  return (
    <>
      <Heading size="md" mb={6} letterSpacing="tight">
        Upcoming Races
      </Heading>
      <Separator mb={6} opacity={0.5} />
    </>
  );
};
