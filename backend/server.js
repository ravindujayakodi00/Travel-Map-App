const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});