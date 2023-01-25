import axios from "axios";

export const getCurrentUser = async () => {
  const currentToken = sessionStorage.getItem("isLoggedIn");
  if (currentToken) {
    const config = {
      headers: {
        authToken: currentToken,
      },
    };
    try {
      const response = await axios.get("/user", config);
      return response;
    } catch (err) {
      return err;
    }
  } else throw new Error("No current user found");
};
