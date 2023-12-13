import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import ScoreCritic from "./ScoreCritic";
import getCropedImage from "../utilities";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={"hidden"}>
      <Image src={getCropedImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconsList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconsList>
          <ScoreCritic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
