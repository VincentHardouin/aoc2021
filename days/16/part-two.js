const { getInput } = require('./input');
const _ = require('lodash');

class Packet {
  constructor({ version, typeId, lengthTypeId, number, subPackets }) {
    this.version = parseInt(version, 2);
    this.typeId = parseInt(typeId, 2);
    this.lengthTypeId = lengthTypeId;
    this.number = parseInt(number, 2);
    this.subPackets = subPackets ?? [];
  }

  get value() {
    switch (this.typeId) {
      case 0:
        return this.subPackets.reduce((acc, packet) => {
          return acc + packet.value;
        }, 0);
      case 1:
        return this.subPackets.reduce((acc, packet) => {
          return acc * packet.value;
        }, 1);
      case 2:
        return _.minBy(this.subPackets, 'value').value;
      case 3:
        return _.maxBy(this.subPackets, 'value').value;
      case 4:
        return this.number;
      case 5:
        return this.subPackets[0].value > this.subPackets[1].value ? 1 : 0;
      case 6:
        return this.subPackets[0].value < this.subPackets[1].value ? 1 : 0;
      case 7:
        return this.subPackets[0].value === this.subPackets[1].value ? 1 : 0;
    }
  }

  static getPacketFromArray(array) {
    const version = array.splice(0, 3).join('');
    const typeId = array.splice(0, 3).join('');

    if (typeId === '100') {
      let number = '';
      let nextBit = '';
      while (nextBit !== '0') {
        nextBit = array.shift();
        let nextNumber = array.splice(0, 4);
        number += nextNumber.join('');
      }
      return new Packet({ version, typeId, number });
    }

    const lengthTypeId = array.shift();

    if (lengthTypeId == '0') {
      const totalSubPacketsLength = parseInt(array.splice(0, 15).join(''), 2);
      const subPacketsBinary = array.splice(0, totalSubPacketsLength);
      const subPackets = [];
      let previousLength = -1;
      while (subPacketsBinary.length !== 0 && subPackets.length > previousLength) {
        previousLength = subPackets.length;
        const subPacket = Packet.getPacketFromArray(subPacketsBinary);
        if (subPacket) subPackets.push(subPacket);
      }
      return new Packet({ version, typeId, lengthTypeId, subPackets });
    }

    if (lengthTypeId == '1') {
      const numberOfSubPackets = parseInt(array.splice(0, 11).join(''), 2);

      const subPackets = [];
      for (let i = 0; i < numberOfSubPackets; i++) {
        const subPacket = Packet.getPacketFromArray(array);
        if (subPacket) subPackets.push(subPacket);
      }

      return new Packet({ version, typeId, lengthTypeId, subPackets });
    }

    return null;
  }
}

function getResult(input = getInput()) {
  const binary = input
    .split('')
    .map((value) => parseInt(value, 16).toString(2).padStart(4, '0').split(''))
    .flat();

  const packets = [];
  let previous = -1;
  while (packets.length > previous) {
    previous = packets.length;
    const packet = Packet.getPacketFromArray(binary);
    if (packet) packets.push(packet);
  }

  return packets.reduce((acc, packet) => {
    return acc + packet.value;
  }, 0);
}

module.exports = {
  Packet,
  getResult,
};
0;
