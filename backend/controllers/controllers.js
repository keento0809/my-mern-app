// GET all requests
const getAll = async (req, res) => {
  try {
    // const data = await
    res.status(200).json({ mssg: "GET REQ" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    res.status(200).json({ mssg: "GET REQ ONE" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postData = async (req, res) => {
  try {
    res.status(200).json({ mssg: "POST DATA" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    res.status(200).json({ mssg: "UPDATE DATA" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteData = async (req, res) => {
  try {
    res.status(200).json({ mssg: "DELETE DATA" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
