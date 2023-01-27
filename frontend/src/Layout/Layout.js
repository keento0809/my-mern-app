import { Container, useMediaQuery } from "@chakra-ui/react";
import GlobalAlert from "../components/Alert/GlobalAlert";
import Nav from "../components/nav/Nav";
import LoadingModal from "../components/modal/LoadingModal";
import useAuthContext from "../hooks/useAuthContext";

const Layout = ({ children }) => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const { isLoading } = useAuthContext();
  return (
    <>
      {isLoading && <LoadingModal />}
      <Nav />
      <Container
        maxWidth={
          !isLargerThan1024
            ? "468px"
            : isLargerThan1024 && !isLargerThan1280
            ? "1024px"
            : "1280px"
        }
        px={isLargerThan1024 ? "56px" : "16px"}
      >
        {children}
      </Container>
      <GlobalAlert />
    </>
  );
};

export default Layout;
