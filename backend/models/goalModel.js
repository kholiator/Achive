const mongoose = require('mongoose');
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'A goal must have text'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);
