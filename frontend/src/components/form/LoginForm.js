import React, { useState } from "react";
import { FormControl, FormLabel, Input, Box, Button } from "@chakra-ui/react";

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa");
  };

  return (
    <Box pt={6}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email" pt={4}>
            Email
          </FormLabel>
          <Input
            name="email"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.email}
            //   onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password" pt={4}>
            Password
          </FormLabel>
          <Input
            name="password"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.password}
            //   onChange={handleChange}
            id="password"
            type="password"
            placeholder="Enter password"
          />
        </FormControl>
        <Button
          mt={16}
          w="full"
          type="submit"
          // leftIcon={<AiOutlinePlus />}
          backgroundColor="pink.100"
          variant="solid"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
