import React from "react";
import AddItemForm from "../form/AddItemForm";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Box
      pt={8}
      width="full"
      flex={1}
      pr={
        isLargerThan1024 && !isLargerThan1280
          ? 10
          : isLargerThan1024 && isLargerThan1280
          ? 12
          : ""
      }
      maxWidth={isLargerThan1024 && "350px"}
    >
      <Box display={isLargerThan1024 && "none"}>
        <Button
          onClick={onOpen}
          leftIcon={<AiOutlinePlus />}
          width="full"
          bgColor={colorMode === "light" ? "pink.100" : "inherit"}
          border="1px solid"
          borderColor="pink.300"
          _hover={{ bg: "#f8a0a0" }}
        >
          Add Item
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">Add New Shopping Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddItemForm onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Box display={!isLargerThan1024 && "none"}>
        <Text fontSize={isLargerThan1024 && "md"}>Add New Shopping Item</Text>
        <AddItemForm onClose={onClose} />
      </Box>
    </Box>
  );
};

export default FormModal;
