import React, { useState } from "react";
import {
  Container,
  Flex,
  Text,
  Box,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import UserMenu from "../Menu/UserMenu";
import useAuthContext from "../../hooks/useAuthContext";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const { isLoggedIn, setCurrentUser, setIsLoggedIn } = useAuthContext();

  return (
    <header>
      <Container maxWidth={isLargerThan1024 && "1024px"} width="100%">
        <Box display={isLargerThan1024 && "none"}>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex justifyContent="center" textAlign="center">
              {isLoggedIn && <UserMenu />}
              {!isLoggedIn && (
                <Link to="/auth">
                  <BiLogIn />
                </Link>
              )}
            </Flex>
            <Text
              py={4}
              fontSize="1.4rem"
              fontWeight="bold"
              letterSpacing={-0.5}
              textAlign="center"
            >
              <Link to="/home">Shopping List</Link>
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
        </Box>
        <Box display={!isLargerThan1024 && "none"} padding="0px 40px">
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              py={4}
              fontSize="1.4rem"
              fontWeight="bold"
              letterSpacing={-0.5}
              textAlign="center"
            >
              <Link to="/home">Shopping List</Link>
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              minWidth="200px"
            >
              {isLoggedIn && (
                <Flex justifyContent="space-between" textAlign="center">
                  <Link to="/profile">
                    <AiOutlineUser />
                  </Link>
                </Flex>
              )}
              <Box>
                {isLoggedIn && (
                  // <Flex justifyContent="space-between" textAlign="center">
                  //   <Link to="/profile">
                  //     <AiOutlineUser />
                  //   </Link>
                  //   <span>
                  //     <FiLogOut />
                  //   </span>
                  // </Flex>
                  <span>
                    <FiLogOut />
                  </span>
                )}
                {/* {!isLoggedIn && (
                  <Link to="/auth">
                    <BiLogIn />
                  </Link>
                )} */}
              </Box>
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
          </Flex>
        </Box>
      </Container>
    </header>
  );
};

export default Nav;
