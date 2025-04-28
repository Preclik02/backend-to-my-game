// Import Express library
const express = require('express');

// Create an Express application
const app = express();

// Sample leaderboard data (this can later be replaced with database or file storage)
let leaderboard = [
  { name: 'David', cash: 1000, bank: 0 },
  { name: 'Mira', cash: 750, bank: 0 },
  { name: 'Vojta', cash: 250, bank: 0 }
];

// A basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// API route to fetch leaderboard data
app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// API route to save a new leaderboard entry (for testing)
app.post('/leaderboard', express.json(), (req, res) => {
  const { name, cash, bank } = req.body;
  if (!name || cash === undefined || bank === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newPlayer = { name, cash, bank };
  leaderboard.push(newPlayer);
  res.status(201).json(newPlayer);
});

// Set the server to listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
