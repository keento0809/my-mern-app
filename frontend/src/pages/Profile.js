import React, { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import axios from "axios";

const Profile = () => {
  const [error, setError] = useState();

  const { currentUser, setCurrentUser } = useAuthContext();

  const path = window.location.pathname;
  const currentPath = path.slice(9);

  useEffect(() => {
    const currentToken = localStorage.getItem("isLoggedIn");
    console.log(currentToken);
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
            Welcome, <strong>{currentUser.email}</strong>!
          </Text>
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
