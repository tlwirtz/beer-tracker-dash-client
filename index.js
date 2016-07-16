'use strict';

const pcap = require('pcap');
const pcap_session = pcap.createSession();

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

const join_ip = function(ipaddr) {
  return ipaddr.join('.');
};

// FIXME -- doesn't seem to be working right. not return the correct values.
function isDash(macAddr) {
  const filteredDash = dashes.filter((dash) => {
    if (dash.macAddr === macAddr) return dash;
  });

  if (filteredDash.length > 0 ) return filteredDash;
  return null;
}

pcap_session.on('packet', (rawpacket) => {
  const packet = pcap.decode.packet(rawpacket);
  if (packet.payload.payload.saddr && join_ip(packet.payload.payload.saddr.addr) === '0.0.0.0'){
    const macAddress = packet.payload.payload.payload.data.slice(28,34);
    console.log(macAddress.toString('hex'));
    if (isDash(macAddress.toString('hex'))) console.log('ITS TRUE', JSON.stringify(isDash(macAddress.toString('hex'))));
  }
});
