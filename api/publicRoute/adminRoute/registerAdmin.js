const express = require("express");
const bcrypt = require("bcryptjs");

const validateAdmin = require('../../middleware/validateAdmin');
const { generateToken } = require('../../token/token');
const db = require('../../../data/helpers/adminDb');

const router = express.Router();

router.post("/", validateAdmin, async (req, res) => {
  const { admin } = req.body;

  admin.password = bcrypt.hashSync(admin.password, 12);

  console.log(admin);

  try {
    const adminId = await db.register(admin);
    const token = generateToken({ id: adminId[0] });
    if (adminId.length) {
      res.status(201).json({ id: adminId[0], token });
    } else {
      res.status(500).send('Failed to register new admin')
    }
  } catch (err) {
    res.status(500).send('Failed to create new admin');
  }
});

module.exports = router;