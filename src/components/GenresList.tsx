import React from "react";
import useGenres from "../hooks/useGenres";
import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import getCropedImage from "../utilities";

const GenresList = () => {
  const { data, isLoading } = useGenres();

  return (
    <List padding={"20px"}>
      {isLoading ? (
        <Center height={"100vh"}>
          <Spinner></Spinner>
        </Center>
      ) : (
        data
          .filter((genre) => !genre.name.includes(" "))
          .map((genre) => (
            <ListItem key={genre.id} padding="5px">
              <HStack>
                <Image
                  src={genre.image_background}
                  borderRadius="5px"
                  boxSize="32px"
                ></Image>
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))
      )}
    </List>
  );
  // <Box key={genre.id}>{genre.name}</Box>
  // <ul>
  //   {genres.map((genre) => (
  //     <li key={genre.id}>{genre.name}</li>
  //   ))}
  // </ul>
};

export default GenresList;
