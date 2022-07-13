import React from "react";
import { Container, Flex, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="1.5rem">
            <BiUserCircle />
            {/* <BsSun onClick={toggleColorMode} /> */}
          </Text>
          <Text
            py={4}
            fontSize="1.5rem"
            fontWeight="bold"
            letterSpacing={-0.5}
            textAlign="center"
          >
            Shopping List
          </Text>
          <Text fontSize="1.3rem">
            {colorMode === "light" ? (
              <BsMoonStars onClick={toggleColorMode} cursor="pointer" />
            ) : (
              <BsSun onClick={toggleColorMode} cursor="pointer" />
            )}
          </Text>
        </Flex>
      </Container>
    </header>
  );
};

export default Nav;
