import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";

const Profile = () => {
  const { currentUser } = useAuthContext();

  const path = window.location.pathname;
  const currentPath = path.slice(9);
  console.log(currentPath);
  return (
    <Layout>
      <Box textAlign="center" pt={6}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Profile
        </Text>
        <Box py={4}>
          <Text fontSize="xl">{currentUser.email}</Text>
        </Box>
        <Button
          mt={6}
          bgColor="inherit"
          border="1px solid"
          borderColor="pink.300"
        >
          <Link to="/">BACK</Link>
        </Button>
      </Box>
    </Layout>
  );
};

export default Profile;
