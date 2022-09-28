exports.home = (req, res) => {
  res.status(200).json({
    message: 'hello world',
    error: message.error,
  });
};
