const mongoose = require('mongoose');
function DbConnect() {
  // Database connection
  mongoose.connect(process.env.DATABASE_URL_COMPASS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('DB connected...');
  });
}

module.exports = DbConnect;
