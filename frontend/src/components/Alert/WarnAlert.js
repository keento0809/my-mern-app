import React from "react";
import useAlertContext from "../../hooks/useAlertContext";
import { Alert, AlertIcon, useMediaQuery } from "@chakra-ui/react";

const WarnAlert = () => {
  const { warnAlert } = useAlertContext();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {warnAlert && (
        <Alert
          status="warning"
          variant="left-accent"
          position="fixed"
          bottom={9}
          left={4}
          width="90%"
          zIndex={10}
        >
          <AlertIcon />
          Item deleted from List.
        </Alert>
      )}
    </>
  );
};

export default WarnAlert;
