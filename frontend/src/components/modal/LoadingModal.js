import React, { useContext } from "react";
import { Spinner, Box, Flex } from "@chakra-ui/react";

const LoadingModal = () => {
  return (
    <Box
      pos="fixed"
      width="100%"
      height="100%"
      top={0}
      right={0}
      bottom={0}
      left={0}
      color="pink.100"
      bgColor="gray.700"
      opacity={0.7}
      zIndex={20}
    >
      <Flex height="100%" justify={"center"} align={"center"}>
        <Spinner size="xl" />
      </Flex>
    </Box>
  );
};

export default LoadingModal;
