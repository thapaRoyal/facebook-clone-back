const User = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    const user = await new User({
      firstName,
      lastName,
      email,
      username,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
