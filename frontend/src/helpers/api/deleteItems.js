import axios from "axios";

export const deleteItems = async () => {
  try {
    const response = await axios.delete("/items");
    return response;
  } catch (err) {
    return err;
  }
};
