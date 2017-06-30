describe('findIslands', function() {
  
  let testGrid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ];  

  let grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ];

  let grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']       
  ]
  describe('Basic Functionality', function() {
    beforeEach(function(done){
      findIslands(testGrid);
      done();                           
    });
    afterEach(function(done){
      done();
    });
    it('findIslands should be a function', function() {
      expect(findIslands).to.be.a('function');
    })
    it('_findIslands should be a function', function() {
      expect(test_api['_findIslands']).to.be.a('function');
    }) 
    it('findLand should be a function', function() {
      expect(test_api['findLand']).to.be.a('function');
    })
    it('It should set the grid to all 0\'s after iterating through all location', function() {
      expect(test_api['grid'][0][0]).to.equal('0');
    })
  })
  describe('Extended Functionality', function() {
    let copyGrid1 = grid1;
    let copyGrid2 = grid2;
    it('Should handle empty input', function() {
      expect(findIslands([[]])).to.equal(0);
      expect(findIslands([[], [], []])).to.equal(0);
    })
    it('It should return 1 given grid1 example', function() {
      expect(findIslands(copyGrid1)).to.equal(1);
    })
    it('It should return 3 given grid2 exmaple', function() {
      expect(findIslands(copyGrid2)).to.equal(3);
    })
  })
});