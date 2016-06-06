var algo = require("../src/algo");
var problem1 = algo.romeoAndJuliet;

describe('problem1', function(){
  context('Test Case 1', function(){
    it('it returns the correct lenght', function(){
      expect(problem1(123)).to.eql(8)
    });
  });

  context('Test Case 3', function(){
    it('it returns the correct coins efficiently', function(){
      //var x = []
      //var start;
      //var finish;
      //for(var i=0;i<20000; ++i) { x.push(1) }
      //start = Date.now()
      //var result = coinChange(20000, [1])
      //finish = Date.now()
      //expect(result).to.eql(x)
      //expect(finish-start).to.be.lessThan(50)
    });
  });
});
