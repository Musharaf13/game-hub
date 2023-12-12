import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const ScoreCritic = ({ score }: Props) => {
  let scoreColor = score > 70 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge colorScheme={scoreColor} borderRadius={"4px"}>
      {score}
    </Badge>
  );
};

export default ScoreCritic;
