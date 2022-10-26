const { validateEmail } = require('../helpers/validation');
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

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email address ',
      });
    }

    console.log(validateEmail(email));

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
