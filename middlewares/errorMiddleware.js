function errorHandler(error, req, res, next) {
    console.error('Failed to fetch data from Sportmonks API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch data from server' });
  }
  
module.exports = errorHandler;