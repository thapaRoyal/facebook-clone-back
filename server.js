const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome from Home');
});

app.get('/', (req, res) => {
  res.send('Welcome from Books');
});

app.listen(8000, () => {
  console.log('server is listening...');
});
