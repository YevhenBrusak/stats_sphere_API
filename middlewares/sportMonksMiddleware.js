// Middleware function to set SportMonks API authorization headers
const setSportMonksHeaders = (req, res, next) => {
    req.sportMonksConfig = {
      headers: { 'Authorization': process.env.SPORTMONKS_API_KEY }
    };
    next();
  };
  
  module.exports = setSportMonksHeaders;