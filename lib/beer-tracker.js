'use strict';

const bluebird = require('bluebird');
const agent = require('superagent-promise')(require('superagent'), bluebird);
const debug = require('debug')('dashClient:beerTrackerLib');

module.exports = (apiUrl) => {

  const removeBeer = (qty, macAddr) => {
    debug('removeBeer');
    agent.post(`${apiUrl}/api/device/${macAddr}/transaction`)
    .body({type: 'adjust-down', qty: 1})
    .end()
    .then(res => debug(res.data))
    .catch(err => debug(err));
  };

  const getDevices = () => {
    debug('getDevices', apiUrl);
    agent.get(`${apiUrl}/api/device`)
    .then(res => debug(res.body))
    .catch(err => debug(err));
    // make req to /api/devices
  };

  return { removeBeer, getDevices };
};
