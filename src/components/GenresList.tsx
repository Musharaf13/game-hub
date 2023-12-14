import React from "react";
import useGenres from "../hooks/useGenres";
import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import getCropedImage from "../utilities";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <VStack align={"flex-start"} padding={"20px"}>
      {data
        .filter((genre) => !genre.name.includes(" "))
        .map((genre) => (
          <HStack>
            <Avatar
              src={getCropedImage(genre.image_background)}
              borderRadius={"10px"}
            ></Avatar>
            <Text>{genre.name}</Text>
          </HStack>
        ))}
    </VStack>
    // <Box key={genre.id}>{genre.name}</Box>
    // <ul>
    //   {genres.map((genre) => (
    //     <li key={genre.id}>{genre.name}</li>
    //   ))}
    // </ul>
  );
};

export default GenresList;
