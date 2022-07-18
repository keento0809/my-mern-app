import React, { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import axios from "axios";

const Profile = () => {
  const [error, setError] = useState();

  const { currentUser, setCurrentUser, setIsLoggedIn } = useAuthContext();

  const handleLogout = () => {
    console.log("logging out");
    setIsLoggedIn(false);
    setCurrentUser({});
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
        <Box py={4}>
          <Text fontSize="lg">
            Welcome, <strong>{currentUser.username}</strong>!
          </Text>
          <Text fontSize="lg" pt={10}>
            Email: {currentUser.email}
          </Text>
          <Button
            my={8}
            bgColor="inherit"
            border="1px solid"
            borderColor="pink.300"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
        <Button
          mt={6}
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
