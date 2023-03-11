import express from "express";
import {getNotifications, markNotificationsAsRead, deleteNotifications} from "../controllers/notification.js";

const router = express.Router();

router.get("/get", getNotifications);
router.put("/read", markNotificationsAsRead);
router.delete("/delete", deleteNotifications);

export default router;
