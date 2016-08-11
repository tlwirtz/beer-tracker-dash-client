'use strict';

const startClient = function startClient(devices) {
  this.devices = devices;
  return function client(macAddr) {
    console.log('client activated', macAddr);
    //all logic should go here
  };
};

const deviceDetected = function deviceDetected() {

};

const searchForDevice = function searchForDevice(macAddr) {
  console.log('searching dashes');
  const filteredDash = this.devices.filter((dash) => {
    if (dash.macAddr === macAddr) return dash;
  });

  if (filteredDash.length > 0 ) return filteredDash;
  return null;
};

const client = {
  startClient: startClient,
  deviceDetected: deviceDetected,
  searchForDevice: searchForDevice
};

module.exports = client;
