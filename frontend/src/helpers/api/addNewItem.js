import axios from "axios";

export const addNewItem = async (currUserId, enteredInfo) => {
  try {
    const response = await axios.post(`/items/${currUserId}`, enteredInfo);
    return response;
  } catch (err) {
    return err;
  }
};
