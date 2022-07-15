import React from "react";
import useAlertContext from "../../hooks/useAlertContext";
import { Alert, AlertIcon } from "@chakra-ui/react";

const LoginAlert = () => {
  const { loginAlert } = useAlertContext();
  return (
    <>
      {loginAlert && (
        <Alert
          status="success"
          variant="left-accent"
          position="fixed"
          bottom={9}
          left={4}
          width="90%"
          zIndex={10}
        >
          <AlertIcon />
          Successfully Logged in!
        </Alert>
      )}
    </>
  );
};

export default LoginAlert;
