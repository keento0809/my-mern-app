import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

const SignupForm = () => {
  const [formInput, setFormInput] = useState({
    emailForSignup: "",
    passwordForSignup: "",
    passwordConfirmation: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);

    setIsSubmit(true);

    // validation
    if (
      formInput.emailForSignup === "" ||
      formInput.passwordForSignup === "" ||
      formInput.passwordConfirmation === ""
    ) {
      return;
    }
  };

  return (
    <Box pt={6}>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isSubmit && formInput.emailForSignup === ""}>
          <FormLabel htmlFor="emailForSignup" pt={4}>
            Email
          </FormLabel>
          <Input
            name="emailForSignup"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.emailForSignup}
            onChange={handleChange}
            id="emailForSignup"
            type="email"
            placeholder="Enter email"
          />
          {isSubmit && <FormErrorMessage>Email is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={isSubmit && formInput.passwordForSignup === ""}>
          <FormLabel htmlFor="passwordForSignup" pt={4}>
            Password
          </FormLabel>
          <Input
            name="passwordForSignup"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.passwordForSignup}
            onChange={handleChange}
            id="passwordForSignup"
            type="password"
            placeholder="Enter password"
          />
          {isSubmit && (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={isSubmit && formInput.passwordConfirmation === ""}
        >
          <FormLabel htmlFor="password" pt={4}>
            Password Confirmation
          </FormLabel>
          <Input
            name="passwordConfirmation"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.passwordConfirmation}
            onChange={handleChange}
            id="passwordConfirmation"
            type="password"
            placeholder="Enter password"
          />
          {isSubmit && (
            <FormErrorMessage>
              Password confirmation is required.
            </FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={16}
          w="full"
          type="submit"
          backgroundColor="pink.100"
          variant="solid"
        >
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
