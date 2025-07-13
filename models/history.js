const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pointsClaimed: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', historySchema);
