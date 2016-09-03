'use strict';

const sniffer = require('./lib/sniffer');
const client = require('./lib/dash-client');
const beerTracker = require('./lib/beer-tracker')(process.env.BEER_TRACKER_SERVER);

const dashes = [
  {
    macId: '7475483d7f6a',
    name: 'gatorade'
  },
  {
    macId: '84d6d03e535f',
    name: 'smart water;'
  },
  {
    macId: '44650dd5ef23',
    name: 'red bull'
  }
];


beerTracker.getDevices()
.then(devices => {
  if (devices.length === 0) return dashes;
  return devices;
})
.then(clientDevices => {
  const dashClient = client.startClient(clientDevices);
  sniffer.sniffForDevice(dashClient);
});
