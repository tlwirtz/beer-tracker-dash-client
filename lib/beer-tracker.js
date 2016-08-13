'use strict';

const bluebird = require('bluebird');
const agent = require('superagent-promise')(require('superagent'), bluebird);
const debug = require('debug')('dashClient:beerTrackerLib');

const beerTacker = module.exports = (apiUrl) => {
  const API_URL = apiUrl;

  const removeBeer = (qty, macAddr) => {
    debug('removeBeer');
    // make req to /api/devices/:deviceID/transaction
  };

  const getDevices = () => {
    debug('getDevices');
    // make req to /api/devices
  };
};
