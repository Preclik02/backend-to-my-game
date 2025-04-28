// Import Express library
const express = require('express');

// Create an Express application
const app = express();

// A basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create an API route to fetch leaderboard data
app.get('/leaderboard', (req, res) => {
  const leaderboard = [
    { name: 'David', cash: 1000, bank: 0 },
    { name: 'Mira', cash: 750, bank: 0 },
    { name: 'Vojta', cash: 250, bank: 0 }
  ];
  
  res.json(leaderboard);
});

// Set the server to listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
