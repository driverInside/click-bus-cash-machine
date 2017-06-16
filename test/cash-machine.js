var expect = require('chai').expect;
var cm = require('../app/cash-machine');

describe("Cash machine", function () {

  describe("Validate entries", function () {
    it("Check if the amount is a positive integer", function () {
      expect(cm.isInteger(1)).to.be.true;
      expect(cm.isInteger('a')).to.be.false;
      expect(cm.isInteger(-20)).to.be.false;
      expect(cm.isInteger('false')).to.be.false;
      expect(cm.isInteger(true)).to.be.false;
    });
    it("Throws an exception when there is an invalid entry", function () {
      expect(cm.getCash.bind(cm, -130.00)).to.throw("InvalidArgumentException");
      expect(cm.getCash.bind(cm, '130.00')).to.throw("InvalidArgumentException");
    });
  });

  describe("Get bills", function () {
    it("Returns an empty array", function () {
      expect(cm.getCash(null)).to.deep.equal([]);
      expect(cm.getCash(0)).to.deep.equal([]);
    });

    it("Throws an exception when there isn't available bills", function () {
      expect(cm.getCash.bind(cm, 125)).to.throw('NoteUnavailableException');
    });

    it("Gets the bills", function () {
      expect(cm.getCash(30.00)).to.deep.equal([20, 10]);
      expect(cm.getCash(80.00)).to.deep.equal([50, 20, 10]);
    });
    
  });
});