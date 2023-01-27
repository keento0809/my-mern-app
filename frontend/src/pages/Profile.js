import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useAlertContext from "../hooks/useAlertContext";
import useItemsContext from "../hooks/useItemsContext";
import { Link } from "react-router-dom";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import { initialAlertInfoState } from "../contexts/alertContext";
import { getCurrentUser } from "../helpers/api/getCurrentUser";
import { getShoppingItems } from "../helpers/api/getShoppingItems";

const Profile = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { items, dispatch } = useItemsContext();
  const { currentUser, setCurrentUser, setIsLoggedIn } = useAuthContext();
  const { setAlertInfo } = useAlertContext();
  const { colorMode } = useColorMode();
  const currentToken = sessionStorage.getItem("isLoggedIn");

  const handleCheckCurrentUser = async () => {
    await getCurrentUser()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
    await getShoppingItems()
      .then((res) => {
        dispatch({ type: "SET_ITEMS", payload: res.data });
      })
      .catch((error) => console.log(error.message));
    setIsLoading(false);
  };

  useEffect(() => {
    currentToken
      ? handleCheckCurrentUser()
      : setError("Failed to fetch user data.");
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currId");
    setAlertInfo({
      isAlert: true,
      status: "success",
      text: "Successfully Logged out!",
    });
    setTimeout(() => {
      setAlertInfo(initialAlertInfoState);
    }, 2000);
  };

  return (
    <>
      <Box textAlign="center" pt={6}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Profile
        </Text>
        <Box py={4}>
          <Text fontSize="lg" color="red.300">
            {error && error}
          </Text>
        </Box>
        <Box
          py={8}
          boxShadow={
            colorMode === "light"
              ? "2px 4px 4px #d4d6de"
              : "2px 4px 4px 6px #161b25"
          }
          borderRadius="12px"
          minHeight="285px"
          maxWidth="400px"
          margin="0 auto"
        >
          {isLoading && <Text fontSize="lg">Loading...</Text>}
          {!isLoading && (
            <Text fontSize="lg">
              Welcome, <strong>{currentUser.username}</strong>!
            </Text>
          )}
          <Box minHeight="90px">
            {!isLoading && (
              <Text fontSize="lg" pt={6}>
                Email: {currentUser.email}
              </Text>
            )}
            {!isLoading && (
              <Text fontSize="lg" pt={3}>
                Items: <strong>{items.length}</strong> items on the list.
              </Text>
            )}
          </Box>
          <Button
            mt={16}
            bgColor="inherit"
            border="1px solid"
            borderColor="pink.300"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
        <Button
          mt={12}
          bgColor="inherit"
          border="1px solid"
          borderColor="pink.300"
        >
          <Link to="/home">BACK</Link>
        </Button>
      </Box>
    </>
  );
};

export default Profile;
