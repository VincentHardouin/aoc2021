const partOne = require('./part-one');

describe('day14 | part-one', () => {
  describe('Rules', () => {
    describe('#getPairInsertion', () => {
      it('should return elements', () => {
        const rulesInput = new Map();
        rulesInput.set('CH', 'B');
        const rules = new partOne.Rules(rulesInput);

        const result = rules.getPairInsertion('CH');

        expect(result).toStrictEqual('B');
      });
    });
  });

  describe('Polymer', () => {
    describe('#getPairs', () => {
      it('should return pairs', () => {
        const polymer = new partOne.Polymer('NNCB', '');

        const result = polymer.getPairs();

        expect(result).toStrictEqual(['NN', 'NC', 'CB']);
      });
    });

    describe('#nextStep', () => {
      it('should edit polymer', () => {
        const rulesInput = new Map();
        rulesInput.set('CH', 'B');
        rulesInput.set('HH', 'N');
        rulesInput.set('CB', 'H');
        rulesInput.set('NH', 'C');
        rulesInput.set('HB', 'C');
        rulesInput.set('HC', 'B');
        rulesInput.set('HN', 'C');
        rulesInput.set('NN', 'C');
        rulesInput.set('BH', 'H');
        rulesInput.set('NC', 'B');
        rulesInput.set('NB', 'B');
        rulesInput.set('BN', 'B');
        rulesInput.set('BB', 'N');
        rulesInput.set('BC', 'B');
        rulesInput.set('CC', 'N');
        rulesInput.set('CN', 'C');
        const rules = new partOne.Rules(rulesInput);

        const polymer = new partOne.Polymer('NNCB', rules);

        polymer.nextStep();

        expect(polymer.polymer).toStrictEqual('NCNBCHB');
      });
    });
  });

  describe('#getResult', () => {
    it('should ', () => {
      const rules = new Map();
      rules.set('CH', 'B');
      rules.set('HH', 'N');
      rules.set('CB', 'H');
      rules.set('NH', 'C');
      rules.set('HB', 'C');
      rules.set('HC', 'B');
      rules.set('HN', 'C');
      rules.set('NN', 'C');
      rules.set('BH', 'H');
      rules.set('NC', 'B');
      rules.set('NB', 'B');
      rules.set('BN', 'B');
      rules.set('BB', 'N');
      rules.set('BC', 'B');
      rules.set('CC', 'N');
      rules.set('CN', 'C');
      const input = {
        polymer: 'NNCB',
        rules,
      };

      const result = partOne.getResult(input);

      expect(result).toBe(1588);
    });
  });
});
