// MULTER --> It is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Make uploads folder accessible
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Upload route
app.post("/upload", upload.single("myfile"), (req, res) => {
  console.log("✅ File uploaded:", req.file.filename);
  res.send(
    `File uploaded successfully! <a href="/uploads/${req.file.filename}">View File</a>`
  );
});

// Download route
app.get("/download/:filename", (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.params.filename);
  res.download(filePath, (err) => {
    if (err) {
      console.error("❌ Error downloading:", err);
      res.status(500).send("Error in download.");
    }
  });
});

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
