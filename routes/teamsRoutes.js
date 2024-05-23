const express = require('express');
const router = express.Router();
const axios = require('axios');

const sportmonksAPI = 'https://api.sportmonks.com/v3/football';

router.get('/:id', async (req, res, next) => {
    try{
      const teamID = req.params.id;
      const response = await axios.get(`${sportmonksAPI}/teams/${teamID}?include=venue`, req.sportMonksConfig);
      res.json(response.data.data);
    }catch(error){
      next(error);
    }
});

router.get('/squad/:teamID/:seasonID', async (req, res, next) => {
  try{
    const teamID = req.params.teamID;
    const seasonID = req.params.seasonID;
    const response = await axios.get(`${sportmonksAPI}/squads/seasons/${seasonID}/teams/${teamID}?include=player;position;details.type&filters=playerStatisticDetailTypes:321,57,88,101,52,79,580`, req.sportMonksConfig);
    res.json(response.data.data);
  }catch(error){
    next(error);
  }
});

router.get('/statistic/:teamID/:seasonID', async (req, res, next) => {
  try{
    const teamID = req.params.teamID;
    const seasonID = req.params.seasonID;
    const response = await axios.get(`${sportmonksAPI}/teams/${teamID}?include=statistics.details.type&filters=teamStatisticSeasons:${seasonID}`, req.sportMonksConfig);
    res.json(response.data.data);
  }catch(error){
    next(error);
  }
});

router.get('/schedule/:teamID/:seasonID', async (req, res, next) => {
  try{
    const teamID = req.params.teamID;
    const seasonID = req.params.seasonID;
    const response = await axios.get(`${sportmonksAPI}/schedules/seasons/${seasonID}/teams/${teamID}`, req.sportMonksConfig);
    res.json(response.data.data);
  }catch(error){
    next(error);
  }
});

module.exports = router;