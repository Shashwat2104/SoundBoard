const express = require("express");
const router = express.Router();
const { createRoom, getRooms, getRoomDetails, createJamRoom } = require("../controllers/roomController");
const authMiddleware = require("../middleware/auth");

router.post("/", authMiddleware, createRoom);
router.post("/jam", authMiddleware, createJamRoom);
router.get("/", getRooms);
router.get("/public", getRooms);
router.get("/:roomCode", getRoomDetails);

module.exports = router;
