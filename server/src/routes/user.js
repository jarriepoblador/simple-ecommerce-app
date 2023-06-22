const express = require('express');
const User = require('../models/user');

const router = express.Router();

//Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Find one user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.id});
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Post user details
router.post('/users', (req, res) => {
    const { first_name, last_name, username, address, email, password } = req.body;
    const user = new User({ first_name, last_name, username, address, email, password });
  
    user.save()
      .then(() => {
        res.status(201).send('Created User');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });

//Patch user details
router.patch('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const { first_name, last_name, username, address, email, password } = req.body;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send('User not found');
      }

      if (first_name) {
        user.first_name = first_name;
      }

      if (last_name) {
        user.last_name = last_name;
      }

      if (username) {
        user.username = username;
      }

      if (address) {
        user.address = address;
      }
      
      if (email) {
        user.email = email;
      }

      if (password) {
        user.password = password;
      }

      return user.save();
    })
    .then(() => {
      res.send('User updated successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

//Delete user
router.delete('/users/:userId', (req, res) => {
  const userId = req.params.userId;

  User.findByIdAndDelete(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send('User not found');
      }

      res.send('User deleted successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;