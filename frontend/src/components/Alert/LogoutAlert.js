import React from "react";
import useAlertContext from "../../hooks/useAlertContext";
import { Alert, AlertIcon, useMediaQuery } from "@chakra-ui/react";

const LogoutAlert = () => {
  const { logoutAlert } = useAlertContext();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {logoutAlert && (
        <Alert
          maxWidth={isLargerThan768 ? "400px" : ""}
          status="warning"
          variant="left-accent"
          position="fixed"
          bottom={9}
          left={4}
          width="90%"
          zIndex={10}
        >
          <AlertIcon />
          Successfully Logged out!
        </Alert>
      )}
    </>
  );
};

export default LogoutAlert;
