import axios from "axios";

export const fetchShoppingItems = async () => {
  const currUserId = sessionStorage.getItem("currId");
  if (currUserId) {
    try {
      const response = await axios.get(`/items/${currUserId}`);
      return response;
    } catch (err) {
      return err;
    }
  } else throw new Error("Failed to get shopping items");
};
