import useAuthContext from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { heroImg } from "../data/data";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import LoadingModal from "../components/modal/LoadingModal";

const Hero = () => {
  const { isLoggedIn, isLoading } = useAuthContext();
  return (
    <>
      <Box overflow="hidden">
        {isLoading && <LoadingModal />}
        <Flex
          minHeight="100svh"
          bgSize="cover"
          bgPosition="center center"
          justifyContent="center"
          alignItems="center"
          bgImage={heroImg}
        >
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            zIndex="10"
            px="2.5rem"
            pt="3.75rem"
            maxWidth="414px"
          >
            <Box pb={8}>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                color="black"
                textShadow="3px 3px 4px #b6adad"
              >
                My Shopping List
              </Text>
              <Text
                fontSize="lg"
                color="black"
                fontWeight={500}
                lineHeight="20px"
                textShadow="3px 3px 4px #b6adad"
              >
                Memorize items not to miss anything when going shopping
              </Text>
            </Box>
            <Button
              color="#fff"
              border="1px solid"
              borderColor="pink.300"
              bgColor="pink.100"
              _hover={{ bg: "#f8a0a0" }}
            >
              <Link to={isLoggedIn ? "/home" : "/auth"}>Get started</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Hero;
