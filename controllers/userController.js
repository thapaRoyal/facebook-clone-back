const { validateEmail, validateLength } = require('../helpers/validation');
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

    // validate email
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email address ',
      });
    }

    // check if exists
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message: 'Email address already in use',
      });
    }

    // validate length
    if (!validateLength(firstName, 3, 30)) {
      return res.status(400).json({
        message: 'First name must be between 3 and 30 characters',
      });
    }

    if (!validateLength(lastName, 3, 30)) {
      return res.status(400).json({
        message: 'Last name must be between 3 and 30 characters',
      });
    }

    if (!validateLength(lastName, 6, 30)) {
      return res.status(400).json({
        message: 'password must be between 6 and 30 characters',
      });
    }

    // save user
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
