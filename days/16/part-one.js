const { getInput } = require('./input');

class Packet {
  constructor({ version, typeId, lengthTypeId, number, subPackets }) {
    this.version = parseInt(version, 2);
    this.typeId = parseInt(typeId, 2);
    this.lengthTypeId = lengthTypeId;
    this.number = number;
    this.subPackets = subPackets ?? [];
  }

  get sum() {
    return (
      this.version +
      this.subPackets.reduce((acc, packet) => {
        return acc + packet.sum;
      }, 0)
    );
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
    return acc + packet.sum;
  }, 0);
}

module.exports = {
  Packet,
  getResult,
};
0;
