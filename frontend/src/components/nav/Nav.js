import React, { useState } from "react";
import {
  Container,
  Flex,
  Text,
  useColorMode,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import UserMenu from "../Menu/UserMenu";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isAvatarClicked, setIsAvatarClicked] = useState(true);
  return (
    <header>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex justifyContent="center" textAlign="center">
            {/* <Avatar size="xs">
              <AvatarBadge boxSize="1rem" bg="green.500" />
            </Avatar> */}
            <UserMenu />
          </Flex>
          <Text
            py={4}
            fontSize="1.4rem"
            fontWeight="bold"
            letterSpacing={-0.5}
            textAlign="center"
          >
            Shopping List
          </Text>
          <Flex justifyContent="center" textAlign="center">
            {colorMode === "light" ? (
              <BsMoonStars onClick={toggleColorMode} cursor="pointer" />
            ) : (
              <BsSun
                onClick={toggleColorMode}
                cursor="pointer"
                width="24px"
                height="24px"
              />
            )}
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Nav;
