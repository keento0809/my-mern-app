import React from "react";
import Layout from "../Layout/Layout";
import FormModal from "../components/modal/FormModal";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Work from "../components/work/Work";

const Home = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Layout>
      <Box
        display={isLargerThan1024 ? "flex" : ""}
        justifyContent={isLargerThan1280 ? "flex-start" : "space-between"}
      >
        <FormModal />
        <Work />
      </Box>
    </Layout>
  );
};

export default Home;
