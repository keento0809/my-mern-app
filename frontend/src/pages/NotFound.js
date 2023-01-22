import React from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Box
        textAlign="center"
        minHeight="100svh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text fontSize="xl" textAlign="center">
            {isLoggedIn && location.pathname === "/auth"
              ? "You are already logged in"
              : "Page Not Found"}
          </Text>
          <Button
            mt={6}
            bgColor="inherit"
            border="1px solid"
            borderColor="pink.300"
          >
            <Link to={!isLoggedIn ? "/" : "/home"}>BACK</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
