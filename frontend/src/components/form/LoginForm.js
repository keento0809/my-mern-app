import React, { useState } from "react";
import { FormControl, FormLabel, Input, Box, Button } from "@chakra-ui/react";

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formInput);

    // validation
    if (
      formInput.email === "" ||
      formInput.password === ""
      // !formInput.password.match(
      //   /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/
      // )
    ) {
      alert("Invalid input");
      return;
    }

    const enteredInfo = {
      email: formInput.email,
      password: formInput.password,
    };

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(enteredInfo),
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
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
            onChange={handleChange}
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
            onChange={handleChange}
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
