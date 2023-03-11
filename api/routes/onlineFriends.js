import { getOnlineUsers } from "../controllers/onlineFriend.js";
import express from "express";

const onlineFriendRouter = express.Router();

// Define the routes for the onlineFriendRouter
onlineFriendRouter.get("/", getOnlineUsers);

export default onlineFriendRouter;
