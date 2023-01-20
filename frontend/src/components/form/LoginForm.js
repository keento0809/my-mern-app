import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAlertContext from "../../hooks/useAlertContext";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import useAuthContext from "../../hooks/useAuthContext";
import { guestUser } from "../../data/data";
import { initialAlertInfoState } from "../../contexts/alertContext";

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState();
  const { alertInfo, setAlertInfo } = useAlertContext();
  const { setIsLoggedIn, setCurrentUser, setIsLoading } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const fetchPostRequest = (obj) => {
    axios
      .post("/auth/login", obj)
      .then((res) => {
        localStorage.setItem("isLoggedIn", res.data.token);
        localStorage.setItem("currId", res.data._id);
        navigate("/home");
        setFormInput({
          email: "",
          password: "",
        });
        setAlertInfo({
          isAlert: true,
          status: "success",
          text: "Successfully Logged in!",
        });
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        setIsLoading(false);
        setTimeout(() => {
          setAlertInfo(initialAlertInfoState);
        }, 1500);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmit(true);
    const { email, password } = formInput;
    if (email === "" || password === "") return;

    const regexEmail = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
    if (!email.match(regexEmail) === "") {
      alert("Invalid Credential.");
      return;
    }
    const enteredInfo = { email, password };

    fetchPostRequest(enteredInfo);
    setIsLoading(false);
  };

  const handleGuestLogin = () => {
    setIsLoading(true);
    const guestUserInfo = guestUser;
    if (!guestUserInfo) {
      setError("Failed to guest login.");
    }
    fetchPostRequest(guestUserInfo);
  };

  return (
    <Box pt={6}>
      <Box minHeight={4}>
        {error && (
          <Text py={2} textAlign="center" fontSize="md" color="tomato">
            {error}
          </Text>
        )}
      </Box>
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
      <Text
        textAlign="center"
        mt={8}
        cursor="pointer"
        onClick={handleGuestLogin}
      >
        Login as guest user
      </Text>
    </Box>
  );
};

export default LoginForm;
