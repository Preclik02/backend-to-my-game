const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// API route to fetch leaderboard data
app.get('/leaderboard', (req, res) => {
    // Read leaderboard.txt and send the data as JSON
    fs.readFile('leaderboard.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading leaderboard data');
            return;
        }

        // Split the data into lines, then parse it into an array
        const leaderboard = data.split('\n').map(line => {
            const [name, cash, bank] = line.split(', ');
            return { name, cash: parseInt(cash), bank: parseInt(bank) };
        });

        // Send the parsed data as JSON
        res.json(leaderboard);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
