import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const regexEmail = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
    const regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;

    // validation
    if (
      !formInput.email.match(regexEmail) === "" ||
      !formInput.password.match(regex)
    ) {
      alert("Invalid Credential.");
      return;
    }

    const enteredInfo = {
      email: formInput.email,
      password: formInput.password,
    };

    axios
      .post("/auth/login", enteredInfo)
      .then((res) => {
        console.log(res);
        navigate("/");
        setFormInput({
          email: "",
          password: "",
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Box pt={6}>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isSubmit && formInput.email === ""}>
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
          {isSubmit && <FormErrorMessage>Email is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={isSubmit && formInput.password === ""}>
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
          {isSubmit && (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={16}
          w="full"
          type="submit"
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
