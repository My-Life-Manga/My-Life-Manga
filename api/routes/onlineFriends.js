const express = require("express");
const router = express.Router();

const onlineUsersController = require("../controllers/onlineFriend.js");

router.get("/", onlineUsersController.getOnlineUsers);

module.exports = router;