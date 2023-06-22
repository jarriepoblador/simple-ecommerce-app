const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const User = require('../models/user');

router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find admin by adminname
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).send('Invalid email or password');
    }
    // Check password
    const isValidPassword = await admin.checkPassword(password);
    if (!isValidPassword) {
      return res.status(400).send('Invalid email or password');
    }
    // Authentication successful
    res.status(200).send('Logged in successfully');
    console.log(admin)
    console.log(email)
    console.log(password)
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/user/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('Invalid username or password');
    }
    const isValidPassword = await user.checkPassword(password);
    if (!isValidPassword) {
      return res.status(400).send('Invalid email or password');
    }
    res.status(200).send('Logged in successfully');
    console.log(user)
    console.log(username)
    console.log(password)
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;