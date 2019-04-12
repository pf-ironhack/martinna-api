const createError = require('http-errors');
const cors = require('cors');

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const allowedOrigins = [
  REACT_APP_API_URL,

]

module.exports = cors({
  origin: (origin, next) => {
    const allowed = !origin || allowedOrigins.indexOf(origin) !== -1;
    if (allowed) {
      next(null, allowed);
    } else {
      next(createError(401, 'Not allowed by CORS'));
    }
  },
  credentials: true
});