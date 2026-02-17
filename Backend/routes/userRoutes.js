const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();
const protect = require('../middleware/authMiddleware');

router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Protected route accessed', userId: req.user });
});


router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
