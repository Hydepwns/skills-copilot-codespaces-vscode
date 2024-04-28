// Create web server and listen on port 3000

const express = require('express');
const app = express();

const comments = [];

app.use(express.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});