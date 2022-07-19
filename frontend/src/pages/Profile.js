import React, { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useAlertContext from "../hooks/useAlertContext";
import useItemsContext from "../hooks/useItemsContext";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import axios from "axios";

const Profile = () => {
  const [error, setError] = useState();

  const { items } = useItemsContext();
  const { currentUser, setCurrentUser, setIsLoggedIn } = useAuthContext();
  const { setLogoutAlert } = useAlertContext();

  const { colorMode } = useColorMode();

  const handleLogout = () => {
    console.log("logging out");
    setIsLoggedIn(false);
    setCurrentUser({});
    setLogoutAlert(true);
    setTimeout(() => {
      setLogoutAlert(false);
    }, 2000);
  };

  useEffect(() => {
    const currentToken = localStorage.getItem("isLoggedIn");
    if (currentToken) {
      const config = {
        headers: {
          authToken: currentToken,
        },
      };
      axios
        .get("/user", config)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Failed to fetch user data.");
    }
  }, []);

  return (
    <Layout>
      <Box textAlign="center" pt={6}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Profile
        </Text>
        <Box py={4}>
          <Text fontSize="lg" color="red.300">
            {error && error}
          </Text>
        </Box>
        <Box
          py={8}
          boxShadow={
            colorMode === "light"
              ? "2px 4px 4px #d4d6de"
              : "2px 4px 4px 6px #161b25"
          }
          borderRadius="12px"
          maxWidth="400px"
          margin="0 auto"
        >
          <Text fontSize="lg">
            Welcome, <strong>{currentUser.username}</strong>!
          </Text>
          <Text fontSize="lg" pt={6}>
            Email: {currentUser.email}
          </Text>
          <Text fontSize="lg" pt={3}>
            Items: <strong>{items.length}</strong> items on the list.
          </Text>
          <Button
            mt={16}
            bgColor="inherit"
            border="1px solid"
            borderColor="pink.300"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
        <Button
          mt={12}
          bgColor="inherit"
          border="1px solid"
          borderColor="pink.300"
        >
          <Link to="/home">BACK</Link>
        </Button>
      </Box>
    </Layout>
  );
};

export default Profile;
