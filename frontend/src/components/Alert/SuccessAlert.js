import React from "react";
import useAlertContext from "../../hooks/useAlertContext";
import { Alert, AlertIcon } from "@chakra-ui/react";

const SuccessAlert = () => {
  const { alert } = useAlertContext();
  return (
    <>
      {alert && (
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
          Item successfully added to List!
        </Alert>
      )}
    </>
  );
};

export default SuccessAlert;
