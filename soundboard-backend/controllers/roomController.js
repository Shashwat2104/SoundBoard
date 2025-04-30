const JamRoom = require("../models/JamRoom");
const User = require("../models/User");

const createRoom = async (req, res) => {
  const { title, bpm, keySignature, isPrivate } = req.body;

  try {
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const room = new JamRoom({
      title,
      bpm,
      keySignature,
      roomCode,
      isPrivate,
      creator: req.user._id,
      participants: [req.user._id],
      createdAt: Date.now()
    });

    await room.save();
    res.status(201).json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getRooms = async (req, res) => {
  try {
    const rooms = await JamRoom.find({ isPrivate: false })
      .populate('participants', 'name')
      .sort({ createdAt: -1 });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Error fetching rooms" });
  }
};

const getRoomDetails = async (req, res) => {
  try {
    const room = await JamRoom.findOne({ roomCode: req.params.roomCode })
      .populate('participants', 'name')
      .populate('loops');
    
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: "Error fetching room details" });
  }
};

const createJamRoom = async (req, res) => {
  const { title, bpm, keySignature, isPrivate } = req.body;

  try {
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const room = new JamRoom({
      title,
      bpm,
      keySignature,
      roomCode,
      isPrivate,
      creator: req.user._id,
      participants: [req.user._id],
      createdAt: Date.now()
    });

    await room.save();
    res.status(201).json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createRoom, getRooms, getRoomDetails, createJamRoom };
