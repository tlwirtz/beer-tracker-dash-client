'use strict';

const startClient = (devices) => {
  this.devices = devices;
  const deviceDetected = () => {};

  const searchForDevice = (macAddr) => {
    console.log('searching dashes');
    const filteredDash = this.devices.filter((dash) => {
      if (dash.macAddr === macAddr) return dash;
    });

    if (filteredDash.length > 0 ) return filteredDash;
    return null;
  };

  return function client(macAddr) {
    console.log('client activated', macAddr);
    const dash = searchForDevice(macAddr);
    console.log('dash', dash);
  };
};

const client = {
  startClient
};

module.exports = client;
