import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const LoginForm = () => {
  const handleSubmit = () => {};
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
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
        <FormLabel htmlFor="password">Password</FormLabel>
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
    </form>
  );
};

export default LoginForm;
