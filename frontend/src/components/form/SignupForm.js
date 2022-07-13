import React, { useState } from "react";
import { FormControl, FormLabel, Input, Box, Button } from "@chakra-ui/react";

const SignupForm = () => {
  const [formInput, setFormInput] = useState({
    emailForSignup: "",
    passwordForSignup: "",
    passwordConfirmation: "",
  });

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);

    // validation
    if (
      formInput.emailForSignup === "" ||
      formInput.passwordForSignup === "" ||
      formInput.passwordConfirmation === ""
    ) {
      alert("Invalid input");
      return;
    }
  };

  return (
    <Box pt={6}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="emailForSignup" pt={4}>
            Email
          </FormLabel>
          <Input
            name="email"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.email}
            onChange={handleChange}
            id="emailForSignup"
            type="email"
            placeholder="Enter email"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="passwordForSignup" pt={4}>
            Password
          </FormLabel>
          <Input
            name="password"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.password}
            onChange={handleChange}
            id="passwordForSignup"
            type="password"
            placeholder="Enter password"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password" pt={4}>
            Password Confirmation
          </FormLabel>
          <Input
            name="passwordConfirmation"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.password}
            onChange={handleChange}
            id="passwordConfirmation"
            type="password"
            placeholder="Enter password"
          />
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
