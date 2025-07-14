const express = require('express');
const router = express.Router();
const User = require('../models/users');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST add a new user
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add user' });
  }
});

// GET /api/users/random — fetch 10 random users
router.get('/random', async (req, res) => {
  try {
    const users = await User.aggregate([{ $sample: { size: 10 } }]);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch random users' });
  }
});



// GET leaderboard (sorted by points)
router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ totalPoints: -1 });
    const ranked = leaderboard.map((user, index) => ({
        rank: index + 1,
        name: user.name,
        totalPoints: user.totalPoints
    }));
    res.json(ranked);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

module.exports = router;

