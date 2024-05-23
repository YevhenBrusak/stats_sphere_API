const express = require('express');
const router = express.Router();
const axios = require('axios');

const sportmonksAPI = 'https://api.sportmonks.com/v3/football';

router.get('/:startDate/:endDate/:page', async (req, res, next) => {
    try{
      const startDate = req.params.startDate;
      const endDate = req.params.endDate;
      const page = req.params.page;
      const response = await axios.get(`${sportmonksAPI}/fixtures/between/${startDate}/${endDate}?page=${page}&include=league:name,image_path;participants:name,image_path;`, req.sportMonksConfig);
      res.json(response.data);
    }catch(error){
      next(error);
    }
});

module.exports = router;