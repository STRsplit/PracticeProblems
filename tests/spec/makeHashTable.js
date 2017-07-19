describe('Hash Table', function() {
  describe('Basic HashTable Creation', function() {
    it('makeHashTable should', function() {
      expect(makeHashTable).to.be.a('function')
    })
  })
  describe('Basic HashTable Creation Methods', function() {
    let ourHT;
    beforeEach(function(){
      ourHT = makeHashTable();                   
    });
    afterEach(function(done){
      done();
    });
    it('Should create a new HashTable', function() {
      expect(ourHT).to.be.an('object')
    })
    it('HashTable should have an insert method', function() {
      expect(ourHT.insert).to.be.a('function')
    })
    it('HashTable should have a retrieve method', function() {
      expect(ourHT.retrieve).to.be.a('function')
    })
    it('HashTable should have a remove method', function() {
      expect(ourHT.remove).to.be.a('function')
    })
    it('HashTable should have a getStorage method', function() {
      expect(ourHT.getStorage).to.be.a('function')
    })
    it('HashTable should have a checkCollision method', function() {
      expect(ourHT.checkCollision).to.be.a('function')
    })
  })
  describe('HashTable: GetStorage Method', function() {
    let ourHT = makeHashTable();                   
    it('Should return empty array before first insertion', function() {
      expect(ourHT.getStorage()).to.be.an('array')
      expect(ourHT.getStorage()).to.deep.equal([])
      expect(ourHT.getStorage().length).to.equal(0)
    })
  })
  describe('HashTable: Insert Method', function() {
    let ourHT;
    let x, foundKeys, foundVals;
    const resetVals = () => {
      foundKeys = [];
      foundVals = [];
      x = ourHT.getStorage().filter(spots => {
        if(spots && spots.length){
          return spots
        }
      })
      x.forEach(([[k, v]]) => {
        foundKeys.push(k)
        foundVals.push(v)
      })
    }
    beforeEach(function(){
      ourHT = makeHashTable();
      ourHT.insert('Houdini', 'magic')
      ourHT.insert('Dog', 'gold')
      ourHT.insert('Sublime', 'text')  
      resetVals()                 
    });
    afterEach(function(done){
      done();
    });
    it('Should insert a key - value pair into the hashTable', function() {
      expect(ourHT.getStorage()).to.be.an('array')
      expect(x).to.be.an('array')
    })
    it('HashTable should insert multiple values', function() {
      expect(x.length).to.equal(3)

      expect(foundKeys).to.include('Dog')
      expect(foundKeys).to.include('Houdini')
      expect(foundKeys).to.include('Sublime')
    })
    it('On collision, should overwrite, not add values that are already in table', function() {
      ourHT.insert('Sublime', 'Editor')
      expect(x.length).to.equal(3)
      resetVals()
      expect(foundKeys.length).to.equal(3)
      expect(foundVals.length).to.equal(3)
      expect(foundKeys).to.include('Sublime')
      expect(foundVals).to.include('Editor')
    })
  })  
  describe('HashTable: Retrieve Method', function() {
    let ourHT;
    beforeEach(function(){
      ourHT = makeHashTable();
      ourHT.insert('Houdini', 'magic')
      ourHT.insert('Dog', 'gold')
      ourHT.insert('Sublime', 'text')                  
    });
    afterEach(function(done){
      done();
    });
    it('Should retrieve values when passed in a key', function() {
      expect(ourHT.retrieve('Houdini')).to.equal('magic')
      expect(ourHT.retrieve('Dog')).to.equal('gold')
      expect(ourHT.retrieve('Sublime')).to.equal('text')
    })
    it('Should return null when asked for value not in HT', function() {
      expect(ourHT.retrieve('Pinnochio')).to.equal(null)
    })
  })  
  describe('HashTable: Remove Method', function() {
    let ourHT;
    ourHT.insert('Houdini', 'magic')
      ourHT.insert('Dog', 'gold')
      ourHT.insert('Sublime', 'text')
    let x, foundKeys, foundVals;
    const resetVals = () => {
      foundKeys = [];
      foundVals = [];
      x = ourHT.getStorage().filter(spots => {
        if(spots && spots.length){
          return spots
        }
      })
      x.forEach(([[k, v]]) => {
        foundKeys.push(k)
        foundVals.push(v)
      })
    }
    beforeEach(function(){
      ourHT = makeHashTable(); 
      resetVals()                 
    });
    afterEach(function(done){
      done();
    });
    it('Should remove a known key', function() {
      expect(ourHT.remove('Houdini')).to.equal('magic')
      resetVals()
      expect(x.length).to.equal(2)
      expect(foundKeys).to.not.include('Houdini')
    })
    it('Should return null when asked to remove non-existent key', function() {
      expect(ourHT.remove('Houdini')).to.equal(null)
    })
    it('HashTable should handle multiple removals', function() {
      expect(ourHT.remove('Sublime')).to.equal('text')
      expect(ourHT.remove('Dog')).to.equal('gold')
      resetVals()
      expect(foundKeys).to.not.include('Sublime')
      expect(foundKeys).to.not.include('Dog')
      expect(x.length).to.equal(0)
    })
  })
});