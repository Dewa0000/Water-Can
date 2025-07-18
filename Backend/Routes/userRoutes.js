const express = require("express");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

const createToken = (_id) => {
      return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" })
}

router.post("/", async (req, res) => {
      const { fullName, email, phoneNumber, password } = req.body;
      try {
            const user = await User.signup(fullName, email, phoneNumber, password);
            const token = createToken(user._id);
            res.status(200).json({
                  user: {
                        _id: user._id,
                        fullName: user.fullName,
                        email: user.email,
                        phoneNumber: user.phoneNumber
                  }, token
            })
      } catch (err) {
            res.status(400).json({ error: err.message })
      }
})

router.post("/login", async (req, res) => {
      const { fullName, email, phoneNumber, password } = req.body;

      try {
            const user = await User.login(email, password);
            const token = createToken(user._id);
            res.status(200).json({
                  user: {
                        _id: user._id,
                        fullName: user.fullName,
                        email: user.email,
                        phoneNumber: user.phoneNumber
                  }, token
            });
      } catch (err) {
            res.status(400).json({ error: err.message })
      }
})

module.exports = router;
