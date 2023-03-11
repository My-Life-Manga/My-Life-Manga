import express from "express";
<<<<<<< HEAD:server/routes/comments.js
import { getComments, addComment, deleteComment } from "../controllers/comment.js";
=======
import {getComments, addComment, deleteComment,} from "../controllers/comment.js";
>>>>>>> 32dbd4379d5584cc15548f3353e9b6fe3e4986b9:api/routes/comments.js

const router = express.Router();

router.get("/", getComments);
router.post("/", addComment);
router.delete("/:id", deleteComment);

export default router;
