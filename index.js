const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Leaderboard API!');
});

let leaderboardeasy = [];

app.get('/leaderboardeasy', (req, res) => {
  res.json(leaderboardeasy);
});

app.post('/leaderboardeasy', (req, res) => {
  const { difficulty, username, score, date } = req.body;
  if (!difficulty || !username || !score || !date) {
    return res.status(400).json({ message: 'All fields (id, time, client) are required.' });
  }
  leaderboardeasy.push({ difficulty, username, score, date });
  res.status(201).json({ message: 'Appointment created successfully!' });
});



let leaderboardmedium = [];

app.get('/leaderboardmedium', (req, res) => {
  res.json(leaderboardmedium);
});

app.post('/leaderboardmedium', (req, res) => {
  const { difficulty, username, score, date } = req.body;
  if (!difficulty || !username || !score || !date) {
    return res.status(400).json({ message: 'All fields (id, time, client) are required.' });
  }
  leaderboardmedium.push({ difficulty, username, score, date });
  res.status(201).json({ message: 'Appointment created successfully!' });
});



let leaderboardhard = [];

app.get('/leaderboardhard', (req, res) => {
  res.json(leaderboardhard);
});

app.post('/leaderboardhard', (req, res) => {
  const { difficulty, username, score, date } = req.body;
  if (!difficulty || !username || !score || !date) {
    return res.status(400).json({ message: 'All fields (id, time, client) are required.' });
  }
  leaderboardhard.push({ difficulty, username, score, date });
  res.status(201).json({ message: 'Appointment created successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
