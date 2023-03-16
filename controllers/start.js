'use strict';

// import all required modules
const logger = require('../utils/logger');
const teamStore = require('../models/team-store.js');

// create start object
const start = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // app statistics calculations

    const teams = teamStore.getAllteams();

    let numteams = teams.length;

    let numplayers = 0;

    for (let item of teams) {
        numplayers += item.players.length;
    }
    
    // display confirmation message in log
    logger.info('start rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
        title: 'Welcome to the team App!',
        totalteams: numteams,
        totalplayers: numplayers,
    };
    
    // render the start view and pass through the data
    response.render('start', viewData);
  },
};

// export the start module
module.exports = start;