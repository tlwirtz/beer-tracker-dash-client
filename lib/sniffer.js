'use strict';

const pcap = require('pcap');
const pcap_session = pcap.createSession();

const join_ip = function(ipaddr) {
  return ipaddr.join('.');
};

const sniffForDevice = function sniffForDevice(cb) {
  console.log('now sniffing');
  return  pcap_session.on('packet', (rawpacket) => {
    const packet = pcap.decode.packet(rawpacket);
    if (packet.payload.payload && packet.payload.payload.saddr && join_ip(packet.payload.payload.saddr.addr) === '0.0.0.0'){
      const macAddress = packet.payload.payload.payload.data.slice(28,34);
      return cb(macAddress.toString('hex'));
    }
  });
};

const sniffer = {
  sniffForDevice: sniffForDevice
};


module.exports = sniffer;
