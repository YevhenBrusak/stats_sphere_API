const express = require('express');
const router = express.Router();
const axios = require('axios');

const sportmonksAPI = 'https://api.sportmonks.com/v3/football';

router.get('/:id', async (req, res, next) => {
  try {
    const leagueID = req.params.id;
    const response = await axios.get(`${sportmonksAPI}/leagues/${leagueID}?include=country:name;currentSeason:id;`, req.sportMonksConfig);
    res.json(response.data.data);
  } catch (error) {
    next(error);
  }
});

router.get('/schedules/seasons/:id', async (req, res, next) => {
  try{
    const seasonID = req.params.id;
    const response = await axios.get(`${sportmonksAPI}/schedules/seasons/${seasonID}`, req.sportMonksConfig);
    res.json(response.data.data);
  }catch(error){
    next(error);
  }
});

router.get('/standings/:id', async (req, res, next) => {
  try{
    const leagueID = req.params.id;
    const response = await axios.get(`${sportmonksAPI}/standings/live/leagues/${leagueID}?include=participant;details`, req.sportMonksConfig);
    res.json(response.data.data);
  }catch(error){
    next(error);
  }
});

module.exports = router;