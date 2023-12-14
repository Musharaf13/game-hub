import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height={"200px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
