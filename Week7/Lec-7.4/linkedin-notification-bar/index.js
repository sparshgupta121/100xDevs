const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Route to return LinkedIn-style notification bar counts
app.get('/', (req, res) => {
    // Generate random numbers for each category
    const notificationCounts = {
        network: Math.floor(Math.random() * 50),      // Random number between 0 and 49
        jobs: Math.floor(Math.random() * 10),         // Random number between 0 and 9
        messages: Math.floor(Math.random() * 20),     // Random number between 0 and 19
        notifications: Math.floor(Math.random() * 30) // Random number between 0 and 29
    };

    res.json(notificationCounts);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
