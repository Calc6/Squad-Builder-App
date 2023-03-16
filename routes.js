'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const team = require('./controllers/team.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

router.get('/team/:id', team.index);

router.get('/team/:id/deleteplayer/:playerid', team.deleteplayer);
router.post('/team/:id/addplayer', team.addplayer);
router.post('/team/:id/updateplayer/:playerid', team.updateplayer);

router.get('/dashboard/deleteteam/:id', dashboard.deleteteam);
router.post('/dashboard/addteam', dashboard.addteam);

// export router module
module.exports = router;

