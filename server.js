const express = require('express');
const cors = require('cors');
require('dotenv').config();
const DbConnect = require('./database');

const userRoutes = require('./routes/user');

const app = express();
app.use(cors());

// routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;

// database
DbConnect();

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
