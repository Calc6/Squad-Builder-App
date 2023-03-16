'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const teamStore = require('../models/team-store');

const team = {
  index(request, response) {
    const teamId = request.params.id;
    logger.debug('team id = ' + teamId);
    const viewData = {
      title: 'team',
      team: teamStore.getteam(teamId),
    };
    logger.info('about to render', viewData.team);
    response.render('team', viewData);
  },
    deleteplayer(request, response) {
    const teamId = request.params.id;
    const playerId = request.params.playerid;
    logger.debug(`Deleting player ${playerId} from team ${teamId}`);
    teamStore.removeplayer(teamId, playerId);
    response.redirect('/team/' + teamId);
  },
    addplayer(request, response) {
    const teamId = request.params.id;
    const team = teamStore.getteam(teamId);
    const newplayer = {
      id: uuid(),
      name: request.body.name,
      nationality: request.body.nationality,
      dob: request.body.dob,
      kitnumber: request.body.kitnumber
    };
    teamStore.addplayer(teamId, newplayer);
    response.redirect('/team/' + teamId);
  },
  updateplayer(request, response) {
    const teamId = request.params.id;
    const playerId = request.params.playerid;
    logger.debug("updating player " + playerId);
    const updatedplayer = {
      name: request.body.name,
      nationality: request.body.nationality,
      dob: request.body.dob,
      kitnumber: request.body.kitnumber
    };
    teamStore.editplayer(teamId, playerId, updatedplayer);
    response.redirect('/team/' + teamId);
  }
};

module.exports = team;