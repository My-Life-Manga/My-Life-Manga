import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import Routes from './routes/index.js'
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", Routes.authRoutes);
app.use("/api/comments", Routes.commentRoutes);
app.use("/api/likes", Routes.likeRoutes);
app.use("/api/notifications", Routes.notificationRoutes);
app.use("/api/online-friends", Routes.onlineFriendsRoutes);
app.use("/api/posts", Routes.postRoutes);
app.use("/api/relationships", Routes.relationshipRoutes);
app.use("/api/upload", Routes.uploadRoutes);
app.use("/api/users", Routes.userRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log("API working!");
});
