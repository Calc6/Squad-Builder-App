'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');

const teamStore = require('../models/team-store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'team App Dashboard',
      teams: teamStore.getAllteams(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.teams);
    response.render('dashboard', viewData);
  },
  
  deleteteam(request, response) {
    const teamId = request.params.id;
    logger.debug(`Deleting team ${teamId}`);
    teamStore.removeteam(teamId);
    response.redirect('/dashboard');
  },
  
  addteam(request, response) {
    const newteam = {
      id: uuid(),
      title: request.body.title,
      stadium: request.body.stadium,
      players: [],
    };
    teamStore.addteam(newteam);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;