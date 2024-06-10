const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error details to the console

  res.status(err.status || 500).send('Something went wrong!');
};

module.exports = errorHandler;
