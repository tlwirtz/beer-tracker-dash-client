'use strict';
const debug = require('debug')('dashClient:client');

const startClient = (devices) => {
  this.devices = devices;

  const deviceDetected = (device) => {
    debug('new device detected');
    return new Promise((resolve, reject) => {
      debug(device);
      return resolve(device);
    });
  };

  const searchForDevice = (macAddr) => {
    debug('searching for device');
    return new Promise((resolve) => {
      const filteredDash = this.devices.filter((dash) => {
        if (dash.macAddr === macAddr) return dash;
      });

      if (filteredDash.length > 0 ) return resolve(filteredDash);
      return resolve(null);
    });
  };

  return function client(macAddr) {
    debug('client activated', macAddr);
    searchForDevice(macAddr)
    .then(device => debug(device));
  };
};

const client = {
  startClient
};

module.exports = client;
