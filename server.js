const express = require('express');
const cors = require('cors');
require('dotenv').config();
const DbConnect = require('./database');

const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use('/api', userRoute);

const PORT = process.env.PORT || 8000;

// database
DbConnect();

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
