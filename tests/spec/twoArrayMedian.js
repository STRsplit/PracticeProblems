describe('twoArrayMedian', function() {
  describe('Basic functionality of 2 array', function() {
    it('findArraysMedian should be a function', function() {
      expect(findArraysMedian).to.be.a('function')
    })
    it('Should return null if no values passed in', function() {
      expect(findArraysMedian()).to.equal(null)
    })
  })
  describe('One array passed in', function() {
    it('Should handle just one array being passed in', function() {
      expect(findArraysMedian([1])).to.equal(1)
    })    
    it('One array - odd number of elements', function() {
      expect(findArraysMedian([1, 2, 3])).to.equal(2)
    })    
    it('One array - even number of elements', function() {
      expect(findArraysMedian([1, 2, 3, 4])).to.equal(2.5)
    })    
  })  
  describe('Two arrays passed in', function() {
    it('Should handle basic two arrays passed in', function() {
      expect(findArraysMedian([1], [1])).to.equal(1)
    })    
    it('Two arrays - odd number of elements', function() {
      expect(findArraysMedian([1, 3, 5], [2, 4])).to.equal(3)
    })    
    it('Two arrays - even number of elements', function() {
      expect(findArraysMedian([1, 3, 5, 7], [2, 4, 6, 8])).to.equal(4.5)
    })
    it('Two arrays - odd number of elements - some repeating elements', function() {
      expect(findArraysMedian([1, 3, 3, 7], [2, 2, 5])).to.equal(3)
    })        
    it('Two arrays - even number of elements - some repeating elements', function() {
      expect(findArraysMedian([1, 3, 3, 7], [2, 2, 5, 8])).to.equal(3)
    })    
  })
});