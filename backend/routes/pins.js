const router = require('express').Router();
const Pin = require('../models/Pin');

// Create a Pin
router.post('/', async (req, res) => {
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    } 
});

// Get all Pins

// Get a specific Pin

// Delete a Pin

// Update a Pin

module.exports = router;