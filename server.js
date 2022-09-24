const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());

app.use('/api', userRoutes);

app.listen(8000, () => {
  console.log('server is listening...');
});
