const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Leaderboard API!');
});

// Leaderboards
let leaderboardeasy = [];
let leaderboardmedium = [];
let leaderboardhard = [];

// Helper function to add an entry and sort leaderboard
function addToLeaderboard(leaderboard, entry) {
  leaderboard.push(entry);
  leaderboard.sort((a, b) => b.score - a.score);
}

// Easy leaderboard
app.get('/leaderboardeasy', (req, res) => {
  res.json(leaderboardeasy);
});

app.post('/leaderboardeasy', (req, res) => {
  const { difficulty, username, score, date } = req.body;
  if (!difficulty || !username || !score || !date) {
    return res.status(400).json({ message: 'All fields (difficulty, username, score, date) are required.' });
  }
  addToLeaderboard(leaderboardeasy, { difficulty, username, score, date });
  res.status(201).json({ message: 'Score added successfully!' });
});

// Medium leaderboard
app.get('/leaderboardmedium', (req, res) => {
  res.json(leaderboardmedium);
});

app.post('/leaderboardmedium', (req, res) => {
  const { difficulty, username, score, date } = req.body;
  if (!difficulty || !username || !score || !date) {
    return res.status(400).json({ message: 'All fields (difficulty, username, score, date) are required.' });
  }
  addToLeaderboard(leaderboardmedium, { difficulty, username, score, date });
  res.status(201).json({ message: 'Score added successfully!' });
});

// Hard leaderboard
app.get('/leaderboardhard', (req, res) => {
  res.json(leaderboardhard);
});

app.post('/leaderboardhard', (req, res) => {
  const { difficulty, username, score, date } = req.body;
  if (!difficulty || !username || !score || !date) {
    return res.status(400).json({ message: 'All fields (difficulty, username, score, date) are required.' });
  }
  addToLeaderboard(leaderboardhard, { difficulty, username, score, date });
  res.status(201).json({ message: 'Score added successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
