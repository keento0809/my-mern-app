import { Container } from "@chakra-ui/react";
import React from "react";
import SuccessAlert from "../components/Alert/SuccessAlert";
import WarnAlert from "../components/Alert/WarnAlert";
import Nav from "../components/nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
      <SuccessAlert />
      <WarnAlert />
    </>
  );
};

export default Layout;
