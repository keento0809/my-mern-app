import axios from "axios";

export const updateItem = async (id, enteredInfo) => {
  try {
    const response = await axios.patch(`/items/${id}`, enteredInfo);
    return response;
  } catch (err) {
    return err;
  }
};
