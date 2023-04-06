const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 8080;

app.get("/api/quote", async (req, res) => {
  const { page } = req.query;
  const url = `https://api.squiggle.com.au/?q=games&year=2023=${page || 1}`;
  try {
    const response = await axios.get(url);
    const quote = response.data;
    res.json({ quote });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
