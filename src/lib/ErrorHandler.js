class MagicError extends Error {
  constructor(code = 500, message) {
    super(message);
    this.statusCode = code;
  }
}

function errorHandler(err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  return res.status(err.statusCode).json(err.toString());
}

module.exports = { errorHandler, MagicError };
