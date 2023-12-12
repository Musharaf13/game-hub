import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image
        src="https://cdn.shopify.com/s/files/1/1862/7495/files/GV211-Left34-SoT_Meg-ds-1x.png"
        boxSize="60px"
      ></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
