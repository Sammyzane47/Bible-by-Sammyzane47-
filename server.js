const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Load Bible data
const bibleData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "bible.json"), "utf8")
);

// API route
app.get("/api/verse", (req, res) => {
  const { book, chapter, verse } = req.query;

  try {
    const result =
      bibleData[book][chapter][verse];
    res.json({ text: result });
  } catch (err) {
    res.status(404).json({ error: "Verse not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
