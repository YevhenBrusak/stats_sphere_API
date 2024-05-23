require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require('cors');
const setSportMonksHeaders = require('./middlewares/sportMonksMiddleware');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(setSportMonksHeaders);

const leaguesRoutes = require('./routes/leaguesRoutes');
const topscorersRoutes = require('./routes/topscorersRoutes');
const teamsRoutes = require('./routes/teamsRoutes');
const fixturesRoutes = require('./routes/fixturesRoutes');

app.use('/leagues', leaguesRoutes);
app.use('/topscorers', topscorersRoutes);
app.use('/teams', teamsRoutes);
app.use('/fixtures', fixturesRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});