import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/coords", async (req, res) => {
  const url = "https://api.3geonames.org/?randomland=yes&json=1";
  try {
    const response = await axios({
      url: url,
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;
