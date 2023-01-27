import { Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const AddButton = () => {
  return (
    <Button
      w="full"
      type="submit"
      leftIcon={<AiOutlinePlus />}
      backgroundColor="pink.100"
      _hover={{ bg: "#f8a0a0" }}
      variant="solid"
    >
      Add
    </Button>
  );
};

export default AddButton;
