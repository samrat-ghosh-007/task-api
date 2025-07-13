const express = require('express');
const router = express.Router();
const User = require('../models/users');
const History = require('../models/history');

// POST claim points
router.post('/', async (req, res) => {
  try {
    const { userId } = req.body;
    const randomPoints = Math.floor(Math.random() * 10) + 1; // 1 to 10

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.totalPoints += randomPoints;
    await user.save();

    const history = new History({
      userId,
      pointsClaimed: randomPoints,
    });
    await history.save();

    res.json({ message: 'Points claimed', points: randomPoints });
  } catch (err) {
    res.status(500).json({ error: 'Failed to claim points' });
  }
});

module.exports = router;
