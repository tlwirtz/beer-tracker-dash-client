'use strict';
const debug = require('debug')('dashClient:client');
const beerTracker = require('./beer-tracker')(process.env.BEER_TRACKER_SERVER);

const startClient = (devices) => {
  this.devices = devices;

  const deviceDetected = (device) => {
    debug('new device detected');
    return new Promise((resolve, reject) => {
      debug('the device', device);
      if (device) {
        debug('making call');
        beerTracker.removeBeer(1, device.macId)
        .then(resolve)
        .catch(reject);
      }
      return resolve(null);

    });
  };

  const searchForDevice = (macAddr) => {
    debug('searching for device');
    return new Promise((resolve) => {
      const filteredDash = this.devices.filter((dash) => {
        if (dash.macId === macAddr) return dash;
      });

      if (filteredDash.length > 0 ) return resolve(filteredDash);
      return resolve(null);
    });
  };

  return function client(macAddr) {
    debug('client activated', macAddr);
    searchForDevice(macAddr)
    .then(devices => deviceDetected(devices[0]))
    .then(() => debug('all done'))
    .catch((err) => {
      if (err === null) return;
      debug('there was an error', err);
    });
  };
};

const client = {
  startClient
};

module.exports = client;
