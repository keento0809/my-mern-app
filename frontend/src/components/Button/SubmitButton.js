import { Button } from "@chakra-ui/react";

const SubmitButton = ({ text }) => {
  return (
    <Button
      w="full"
      type="submit"
      backgroundColor="pink.100"
      _hover={{ bg: "#f8a0a0" }}
      variant="solid"
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
