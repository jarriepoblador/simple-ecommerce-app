const express = require('express');
const Admin = require('../models/admin');

const router = express.Router();

//Get all admins
router.get('/admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.send(admins);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Find one admin by ID
router.get('/admins/:id', async (req, res) => {
  try {
    const admin = await Admin.findOne({_id: req.params.id});
    if (!admin) {
      return res.status(404).send('Admin not found');
    }
    res.send(admin);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Post admin details
router.post('/admins', (req, res) => {
    const { email, password } = req.body;
    const admin = new Admin({ email, password });
  
    admin.save()
      .then(() => {
        res.status(201).send('Created Admin');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });

//Patch admin details
router.patch('/admins/:adminId', (req, res) => {
  const adminId = req.params.adminId;
  const { email, password } = req.body;

  Admin.findById(adminId)
    .then((admin) => {
      if (!admin) {
        return res.status(404).send('Admin not found');
      }

      if (email) {
        admin.email = email;
      }

      if (password) {
        admin.password = password;
      }

      return admin.save();
    })
    .then(() => {
      res.send('Admin updated successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

//Delete admin
router.delete('/admins/:adminId', (req, res) => {
  const adminId = req.params.adminId;

  Admin.findByIdAndDelete(adminId)
    .then((admin) => {
      if (!admin) {
        return res.status(404).send('Admin not found');
      }

      res.send('Admin deleted successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;