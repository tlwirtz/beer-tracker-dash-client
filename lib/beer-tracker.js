'use strict';

const bluebird = require('bluebird');
const agent = require('superagent-promise')(require('superagent'), bluebird);
const debug = require('debug')('dashClient:beerTrackerLib');

module.exports = (apiUrl) => {

  if (!apiUrl) throw new Error('Must provide an inventory server url');

  const removeBeer = (qty, macAddr) => {
    debug('removeBeer', macAddr);

    return new Promise((resolve, reject) => {
      agent.post(`${apiUrl}/api/device/${macAddr}/transaction`)
      .send({type: 'adjust-down', qty: 1})
      .end()
      .then(res => resolve(res.data))
      .catch(err => reject(err));
    });
  };

  const getDevices = () => {
    debug('getDevices', apiUrl);
    return new Promise((resolve, reject) => {
      agent.get(`${apiUrl}/api/device`)
      .then(res => resolve(res.body))
      .catch(err => reject(err));
    });
  };

  return { removeBeer, getDevices };
};
