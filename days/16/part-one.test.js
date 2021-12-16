const partOne = require('./part-one');

describe('day16 | part-one', () => {
  function hexToArrayOfBit(hex) {
    return hex
      .split('')
      .map((value) => parseInt(value, 16).toString(2).padStart(4, '0').split(''))
      .flat();
  }

  describe('Packet', () => {
    describe('#getPacketFromArray', () => {
      describe('when it is a literal value', () => {
        it('should return a Packet when it is a literal value', () => {
          const array = hexToArrayOfBit('D2FE28');

          const packet = partOne.Packet.getPacketFromArray(array);

          expect(packet.version).toBe(6);
          expect(packet.typeId).toBe(4);
          expect(packet.number).toBe('011111100101');
        });
      });

      describe('when it is an operator', () => {
        describe('when length type == 0', () => {
          it('should return a Packet', () => {
            const array = hexToArrayOfBit('38006F45291200');

            const packet = partOne.Packet.getPacketFromArray(array);

            expect(packet.version).toBe(1);
            expect(packet.typeId).toBe(6);
            expect(packet.subPackets.length).toBe(2);
          });
        });

        describe('when length type == 1', () => {
          it('should return a Packet', () => {
            const array = hexToArrayOfBit('EE00D40C823060');

            const packet = partOne.Packet.getPacketFromArray(array);

            expect(packet.version).toBe(7);
            expect(packet.typeId).toBe(3);
            expect(packet.lengthTypeId).toBe('1');
            expect(packet.subPackets.length).toBe(3);
          });
        });
      });
    });
  });

  describe('#getResult', () => {
    [
      {
        input: '8A004A801A8002F478',
        expectedResult: 16,
      },
      {
        input: '620080001611562C8802118E34',
        expectedResult: 12,
      },
      {
        input: 'C0015000016115A2E0802F182340',
        expectedResult: 23,
      },
      {
        input: 'A0016C880162017C3686B18A3D4780',
        expectedResult: 31,
      },
    ].forEach((testCase) => {
      it(`should return ${testCase.expectedResult}`, () => {
        const result = partOne.getResult(testCase.input);

        expect(result).toBe(testCase.expectedResult);
      });
    });
  });
});
