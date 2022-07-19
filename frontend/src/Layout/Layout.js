import { Container, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import LoginAlert from "../components/Alert/LoginAlert";
import LogoutAlert from "../components/Alert/LogoutAlert";
import SignupAlert from "../components/Alert/SignupAlert";
import SuccessAlert from "../components/Alert/SuccessAlert";
import WarnAlert from "../components/Alert/WarnAlert";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }) => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <Nav />
      <Container
        maxWidth={!isLargerThan1024 ? "500px" : ""}
        padding={isLargerThan1024 && "0 56px"}
      >
        {children}
      </Container>
      <SuccessAlert />
      <WarnAlert />
      <LoginAlert />
      <LogoutAlert />
      <SignupAlert />
    </>
  );
};

export default Layout;
