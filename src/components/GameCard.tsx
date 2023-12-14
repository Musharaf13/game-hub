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
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
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
    </GameCardContainer>
  );
};

export default GameCard;
