const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// Import Routes
const pinRoutes = require('./routes/pins')
// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Route Middlewares
app.use('/api/pins', pinRoutes);

// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log(`Backend server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});
