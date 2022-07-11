import React from "react";
import AddItemForm from "../form/AddItemForm";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box pt={8}>
      <Button
        onClick={onOpen}
        leftIcon={<AiOutlinePlus />}
        width="full"
        bgColor="inherit"
        border="1px solid"
        borderColor="pink.300"
      >
        Add Item
      </Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Shopping Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddItemForm onClose={onClose} />
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FormModal;
