import React from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const NotFound = () => {
  const { isLoggedIn } = useAuthContext();
  return (
    <Layout>
      <Box textAlign="center" pt={10}>
        <Text fontSize="xl" textAlign="center">
          Page Not Found
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
    </Layout>
  );
};

export default NotFound;
