import { Container } from "@chakra-ui/react";
import React from "react";
import LoginAlert from "../components/Alert/LoginAlert";
import SignupAlert from "../components/Alert/SignupAlert";
import SuccessAlert from "../components/Alert/SuccessAlert";
import WarnAlert from "../components/Alert/WarnAlert";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
      <SuccessAlert />
      <WarnAlert />
      <LoginAlert />
      <SignupAlert />
    </>
  );
};

export default Layout;
