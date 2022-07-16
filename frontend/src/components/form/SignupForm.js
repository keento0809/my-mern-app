import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAlertContext from "../../hooks/useAlertContext";
import useAuthContext from "../../hooks/useAuthContext";
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

const SignupForm = () => {
  const [formInput, setFormInput] = useState({
    emailForSignup: "",
    passwordForSignup: "",
    passwordConfirmation: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState();

  const { setSignupAlert } = useAlertContext();
  const { setIsLoggedIn } = useAuthContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    if (
      formInput.emailForSignup === "" ||
      formInput.passwordForSignup === "" ||
      formInput.passwordConfirmation === ""
    )
      return;

    const regexEmail = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
    const regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;

    // validation
    if (
      // formInput.emailForSignup === "" ||
      !formInput.emailForSignup.match(regexEmail)
      // !formInput.passwordForSignup.match(regex) ||
      // !formInput.passwordConfirmation.match(regex)
    ) {
      alert("Invalid input.");
      return;
    }

    if (formInput.passwordForSignup !== formInput.passwordConfirmation) {
      alert("Password not matched.");
      return;
    }

    const enteredInfo = {
      email: formInput.emailForSignup,
      password: formInput.passwordForSignup,
    };

    axios
      .post("/auth/signup", enteredInfo)
      .then((res) => {
        navigate("/");
        setFormInput({
          emailForSignup: "",
          passwordForSignup: "",
          passwordConfirmation: "",
        });
        setSignupAlert(true);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        setTimeout(() => {
          setSignupAlert(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
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
