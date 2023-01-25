import axios from "axios";

export const postAuthentication = async (obj, text) => {
  try {
    const response = await axios.post(`/auth/${text}`, obj);
    sessionStorage.setItem("isLoggedIn", response.data.token);
    sessionStorage.setItem("currId", response.data._id);
    return response;
  } catch (err) {
    return err;
  }
};
