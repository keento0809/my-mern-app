import axios from "axios";

export const deleteOneItem = async (id) => {
  try {
    const response = await axios.delete(`/items/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};
