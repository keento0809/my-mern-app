import React from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
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
          <Link to="/">BACK</Link>
        </Button>
      </Box>
    </Layout>
  );
};

export default NotFound;
