const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register

router.post('/register', async (req, res) => {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
         //Create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Save user and respond
        const user = await newUser.save();
        res.status(200).json(user._id);

    } catch (err) { 
        res.status(500).json(err);
    }
}
);

//login

router.post('/login', async (req, res) => {
    try{
        // Find user
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json('Invalid credentials!');
        }

        // Validate password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json('Invalid credentials!');
        }

        // send response
        res.status(200).json({ _id: user._id, username: user.username });
    }catch(err) {
        res.status(500).json(err);
    }
});



module.exports = router;