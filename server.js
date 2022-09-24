const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const userRoutes = require('./routes/user');

const app = express();
app.use(cors());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
