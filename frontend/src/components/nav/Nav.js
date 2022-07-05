import React from "react";
import { Container, Flex, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="1.5rem" visibility="hidden">
            <BsSun onClick={toggleColorMode} />
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
              <BsMoonStars onClick={toggleColorMode} />
            ) : (
              <BsSun onClick={toggleColorMode} />
            )}
          </Text>
        </Flex>
      </Container>
    </header>
  );
};

export default Nav;
