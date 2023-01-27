import {
  Container,
  Flex,
  Text,
  Box,
  useColorMode,
  useMediaQuery,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import SideMenu from "../sideMenu/SideMenu";
import useAuthContext from "../../hooks/useAuthContext";
import useAlertContext from "../../hooks/useAlertContext";
import { initialAlertInfoState } from "../../contexts/alertContext";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const { isLoggedIn, setCurrentUser, setIsLoggedIn } = useAuthContext();
  const { setAlertInfo } = useAlertContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currId");
    setAlertInfo({
      isAlert: true,
      status: "success",
      text: "Successfully Logged out!",
    });
    setTimeout(() => {
      setAlertInfo(initialAlertInfoState);
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
              {isLoggedIn && <SideMenu />}
              {!isLoggedIn && (
                <Link to="/auth">
                  <Tooltip label="Login">
                    <span>
                      <BiLogIn />
                    </span>
                  </Tooltip>
                </Link>
              )}
            </Flex>
            <Text
              py={4}
              fontSize="1.3rem"
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
              fontSize="1.2rem"
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
                    <Tooltip hasArrow label="Profile">
                      <span>
                        <AiOutlineUser />
                      </span>
                    </Tooltip>
                  </Link>
                </Flex>
              )}
              <Box>
                {isLoggedIn && (
                  <span onClick={handleLogout}>
                    <Tooltip hasArrow label="Logout">
                      <span>
                        <FiLogOut cursor="pointer" />
                      </span>
                    </Tooltip>
                  </span>
                )}
              </Box>
              <Flex justifyContent="center" textAlign="center">
                {colorMode === "light" ? (
                  <Tooltip hasArrow label="Dark">
                    <span>
                      <BsMoonStars onClick={toggleColorMode} cursor="pointer" />
                    </span>
                  </Tooltip>
                ) : (
                  <Tooltip hasArrow label="Light">
                    <span>
                      <BsSun
                        onClick={toggleColorMode}
                        cursor="pointer"
                        width="24px"
                        height="24px"
                      />
                    </span>
                  </Tooltip>
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
