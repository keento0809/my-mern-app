import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAlertContext from "../../hooks/useAlertContext";
import useAuthContext from "../../hooks/useAuthContext";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { initialAlertInfoState } from "../../contexts/alertContext";
import { postAuthentication } from "../../helpers/api/postAuthentication";
import SubmitButton from "../button/SubmitButton";

const SignupForm = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    emailForSignup: "",
    passwordForSignup: "",
    passwordConfirmation: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState();
  const { setAlertInfo } = useAlertContext();
  const { setIsLoggedIn, setCurrentUser, setIsLoading } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const fetchPostRequestForSignup = async (obj) => {
    await postAuthentication(obj, "signup")
      .then((res) => {
        navigate("/home");
        setFormInput({
          username: "",
          emailForSignup: "",
          passwordForSignup: "",
          passwordConfirmation: "",
        });
        setAlertInfo({
          isAlert: true,
          status: "success",
          text: "Successfully Signed up!",
        });
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        setTimeout(() => {
          setAlertInfo(initialAlertInfoState);
        }, 1500);
      })
      .catch((err) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmit(true);

    if (
      formInput.username === "" ||
      formInput.emailForSignup === "" ||
      formInput.passwordForSignup === "" ||
      formInput.passwordConfirmation === ""
    ) {
      setIsLoading(false);
      return;
    }

    const regexEmail = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
    // const regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;

    // validation
    if (!formInput.emailForSignup.match(regexEmail)) {
      alert("Invalid input.");
      setIsLoading(false);
      return;
    }

    if (formInput.passwordForSignup !== formInput.passwordConfirmation) {
      alert("Password not matched.");
      setIsLoading(false);
      return;
    }

    const enteredInfo = {
      username: formInput.username,
      email: formInput.emailForSignup,
      password: formInput.passwordForSignup,
    };

    fetchPostRequestForSignup(enteredInfo);
    setIsLoading(false);
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
        <FormControl isInvalid={isSubmit && formInput.username === ""}>
          <FormLabel htmlFor="username" pt={4}>
            Username
          </FormLabel>
          <Input
            name="username"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={formInput.username}
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="Enter Username"
          />
          {isSubmit && (
            <FormErrorMessage>Username is required.</FormErrorMessage>
          )}
        </FormControl>
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
        <Box mt={16}>
          <SubmitButton text={"Signup"} />
        </Box>
      </form>
    </Box>
  );
};

export default SignupForm;
