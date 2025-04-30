const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Get current user data
router.get('/me', auth, async (req, res) => {
  try {
    // The auth middleware already adds user ID to req.user
    const userId = req.user._id;
    
    // Fetch user from database
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;