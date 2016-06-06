var algo = require("../src/algo");
var problem1 = algo.romeoAndJuliet;

describe('problem1', function(){
  context('Test Case 1', function(){
    it('it returns the correct lenght', function(){
      expect(problem1(123)).to.eql(8)
    });
  });
});
