import { Container, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import LoginAlert from "../components/Alert/LoginAlert";
import SignupAlert from "../components/Alert/SignupAlert";
import SuccessAlert from "../components/Alert/SuccessAlert";
import WarnAlert from "../components/Alert/WarnAlert";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Nav />
      <Container maxWidth={isLargerThan768 ? "500px" : ""}>
        {children}
      </Container>
      <SuccessAlert />
      <WarnAlert />
      <LoginAlert />
      <SignupAlert />
    </>
  );
};

export default Layout;
