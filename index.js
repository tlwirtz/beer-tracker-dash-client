'use strict';

const sniffer = require('./lib/sniffer');
const client = require('./lib/dash-client');
const beerTracker = require('./lib/beer-tracker')(process.env.BEER_TRACKER_SERVER);

const dashes = [
  {
    macAddr: '7475483d7f6a',
    name: 'gatorade'
  },
  {
    macAddr: '84d6d03e535f',
    name: 'smart water;'
  },
  {
    macAddr: '44650dd5ef23',
    name: 'red bull'
  }
];


beerTracker.getDevices();
const dashClient = client.startClient(dashes);
sniffer.sniffForDevice(dashClient);
