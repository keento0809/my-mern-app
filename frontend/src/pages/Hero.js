import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { heroImg } from "../data/data";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  const { isLoggedIn } = useAuthContext();
  return (
    <Box overflow="hidden">
      <Flex
        bgImage={heroImg}
        minHeight="100vh"
        bgSize="cover"
        bgPosition="center center"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          zIndex="10"
          px="40px"
        >
          <Box pb={8}>
            <Text fontSize="3xl" fontWeight="bold" color="black">
              My Shopping List
            </Text>
            <Text fontSize="lg" color="black">
              Memorize items not to miss anything when going shopping
            </Text>
          </Box>
          <Button
            color="#fff"
            border="1px solid"
            borderColor="pink.300"
            bgColor="pink.100"
          >
            <Link to={isLoggedIn ? "/home" : "/auth"}>Get started</Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
