var algo = require("../src/algo");
var problem1 = algo.pathfinder;

describe('problem1', function(){
  context('Test Case 1', function(){
    it('it returns the correct lenght', function(){
      expect(
          problem1(
            4,5,
            [
              [ 0 , 0  , 0  , 0  , 0  ],
              [ 0 , -1 , -1 , 0  , -1 ],
              [ 0 , 0  , 0  , -1 , 0  ],
              [ 0 , -1 , 0  , 0  , 0  ],
            ],
            0,0,
            3,4
          )).to.eql(7)
    });
  });


  context('Test Case 2', function(){
    it('it returns the correct lenght', function(){
      expect(
          problem1(
            4,5,
            [
              [ 0 , 0  , 0  , 0  , 0  ],
              [ 0 , -1 , -1 , 0  , 0  ],
              [ 0 , 0  , 0  , -1 , 0  ],
              [ 0 , 0  , 0  , 0  , 0  ],
            ],
            0,0,
            3,4
          )).to.eql(7)
    });
  });

  context('Test Case 3', function(){
    it('it returns the correct lenght', function(){
      expect(
          problem1(
            10,10,
            [
              [ 0 ,  0  , 0 ,  0 ,  0  ,  0 ,  0 , 0  , 0  , 0 ],
              [ 0 , -1 , -1 , -1 ,  0  ,  0 , -1 , 0  , 0  , 0 ],
              [ 0 ,  0  , 0 , -1 ,  0  ,  0 , -1 , 0  , 0  , 0 ],
              [ 0 , -1 , -1 , -1 , -1  ,  0 , -1 , 0  , 0  , 0 ],
              [ 0 ,  0  , 0 ,  0 ,  0  ,  0 ,  0 , -1 , 0  , 0 ],
              [ 0 , -1 , -1 ,  0 , -1  , -1 , -1 , -1 , 0  , 0 ],
              [ 0 ,  0  , 0 , -1 ,  0  ,  0 , -1 , -1 , 0  , 0 ],
              [ 0 ,  0  , 0 ,  0 ,  0  ,  0 , -1 , -1 , 0  , 0 ],
              [ 0 ,  0  , 0 ,  0 ,  0  ,  0 ,  0 , 0  , 0  , 0 ],
              [ 0 , -1 , -1 ,  0 ,  0  ,  0 , -1 , -1 , 0  , 0 ],
            ],
            4,4,
            9,9
          )).to.eql(18)
    });
  });

});
