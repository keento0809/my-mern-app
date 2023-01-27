import useAlertContext from "../../hooks/useAlertContext";
import { Alert, AlertIcon, useMediaQuery } from "@chakra-ui/react";

const GlobalAlert = () => {
  const { alertInfo } = useAlertContext();
  const { text, status, isAlert } = alertInfo;
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isAlert && (
        <Alert
          maxWidth={isLargerThan768 ? "400px" : ""}
          status={status}
          variant="left-accent"
          position="fixed"
          bottom={9}
          left={4}
          width="90%"
          zIndex={10}
        >
          <AlertIcon />
          {text}
        </Alert>
      )}
    </>
  );
};

export default GlobalAlert;
