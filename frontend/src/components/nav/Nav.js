import React from "react";
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
import Usermenu from "../menu/Usermenu";
import useAuthContext from "../../hooks/useAuthContext";
import useAlertContext from "../../hooks/useAlertContext";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const { isLoggedIn, setCurrentUser, setIsLoggedIn } = useAuthContext();
  const { setLogoutAlert } = useAlertContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("isLoggedIn");
    setLogoutAlert(true);
    setTimeout(() => {
      setLogoutAlert(false);
    }, 2000);
  };

  return (
    <Box
      width="100%"
      position="fixed"
      zIndex={10}
      top="0"
      left="0"
      backgroundColor={colorMode === "dark" ? "#1A202C" : "#fff"}
    >
      <Container
        maxWidth={isLargerThan1280 ? "1280px" : "1024px"}
        width="100%"
        padding={isLargerThan1024 && "0 56px"}
      >
        <Box display={isLargerThan1024 && "none"}>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex justifyContent="center" textAlign="center">
              {isLoggedIn && <Usermenu />}
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
        <Box display={!isLargerThan1024 && "none"}>
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
                  <span onClick={handleLogout}>
                    <FiLogOut />
                  </span>
                )}
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
    </Box>
  );
};

export default Nav;
