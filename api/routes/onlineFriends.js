const express = require("express");
const router = express.Router();

const onlineFriendController = require("../controllers/onlineFriend");

router.get("/", onlineFriendController.getOnlineUsers);
router.post("/", onlineFriendController.addOnlineUser);
router.delete("/", onlineFriendController.removeOnlineUser);

module.exports = router;
