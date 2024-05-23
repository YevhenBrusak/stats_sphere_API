const express = require('express');
const router = express.Router();
const axios = require('axios');

const sportmonksAPI = 'https://api.sportmonks.com/v3/football';

router.get('/goals/:id', async (req, res, next) => {
    try{
      const seasonID = req.params.id;
      const response = await axios.get(`${sportmonksAPI}/topscorers/seasons/${seasonID}?per_page=10&filters=seasonTopscorerTypes:208&include=player:common_name,image_path;participant:name,image_path;`, req.sportMonksConfig);
      res.json(response.data.data);
    }catch(error){
      next(error);
    }
});
  
router.get('/assists/:id', async (req, res, next) => {
    try{
      const seasonID = req.params.id;
      const response = await axios.get(`${sportmonksAPI}/topscorers/seasons/${seasonID}?per_page=10&filters=seasonTopscorerTypes:209&include=player:common_name,image_path;participant:name,image_path;`, req.sportMonksConfig);
      res.json(response.data.data);
    }catch(error){
      next(error);
    }
});
  
router.get('/yellow-cards/:id', async (req, res, next) => {
    try{
      const seasonID = req.params.id;
      const response = await axios.get(`${sportmonksAPI}/topscorers/seasons/${seasonID}?per_page=10&filters=seasonTopscorerTypes:84&include=player:common_name,image_path;participant:name,image_path;`, req.sportMonksConfig);
      res.json(response.data.data);
    }catch(error){
      next(error);
    }
});
  
router.get('/penalty/:id', async (req, res, next) => {
    try{
      const seasonID = req.params.id;
      const response = await axios.get(`${sportmonksAPI}/topscorers/seasons/${seasonID}?per_page=10&filters=seasonTopscorerTypes:1600&include=player:common_name,image_path;participant:name,image_path;`,req.sportMonksConfig);
      res.json(response.data.data);
    }catch(error){
      next(error);
    }
});

module.exports = router;