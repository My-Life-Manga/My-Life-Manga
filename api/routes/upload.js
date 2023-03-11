import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/upload.js";

const router = express.Router();

// Define the storage settings for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for uploaded files
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Set the filename of the uploaded file
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Define the multer middleware to handle file uploads
const upload = multer({ storage: storage });

// Define the upload route
router.post("/upload", upload.single("file"), uploadFile);

export default router;
