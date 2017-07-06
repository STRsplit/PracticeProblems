describe('linkedList', function() {
  describe('Basic Linked List Functionality', function() {
    let list;
    beforeEach(function(){
      list = new LinkedList();                   
    });
    afterEach(function(done){
      done();
    });
    it('Should instantiate a new Linked list', function() {
      expect(list.head).to.equal(null)
    })
    it('Should be a function', function() {
      expect(LinkedList).to.be.a('function')
    })
  })
  describe('Linked List Methods', function() {
    let list;
    beforeEach(function(){
      list = new LinkedList();                   
    });
    afterEach(function(done){
      done();
    });
    it('Add to tail should be a function', function() {
      expect(list.addToTail).to.be.a('function')
    })    
    it('Remove head should be a function', function() {
      expect(list.removeHead).to.be.a('function')
    })    
    it('Contains should be a function', function() {
      expect(list.contains).to.be.a('function')
    })
    it('MakeNode should be a function', function() {
      expect(list.makeNode).to.be.a('function')
    })
  })
  describe('Linked List addition to tail', function() {
    let list;
    beforeEach(function(){
      list = new LinkedList();
      list.addToTail(5)                   
    });
    afterEach(function(done){
      done();
    });
    it('A list without nodes should add list to tail, setting head & tail pointing to same node', function() {
      expect(list.head).to.deep.equal({value: 5, next: null})
      expect(list.tail).to.deep.equal({value: 5, next: null})
    })
    it('Should add additional values to tail', function() {
      list.addToTail(11)
      expect(list.tail).to.deep.equal({value: 11, next: null})
      expect(list.head).to.deep.equal({value: 5, next: {value: 11, next: null}})
    })
    it('Should add additional values to tail', function() {
      list.addToTail(11)
      list.addToTail(13)
      expect(list.tail).to.deep.equal({value: 13, next: null})
      expect(list.head.next).to.deep.equal({value: 11, next: {value: 13, next: null}})
    })
  })
  describe('Linked List remove head', function() {
    let list;
    beforeEach(function(){
      list = new LinkedList();
      list.addToTail(5)                   
    });
    afterEach(function(done){
      done();
    });
    it('A list with a head should return the head value when removeHead is called', function() {
      expect(list.head).to.deep.equal({value: 5, next: null})
      list.removeHead();
      expect(list.head).to.equal(null)
    })
    it('When the head is removed, the head should be set to the next node', function() {
      list.addToTail(11)
      list.addToTail(10)
      expect(list.tail).to.deep.equal({value: 10, next: null})
      expect(list.removeHead()).to.equal(5)
      expect(list.head).to.deep.equal({value: 11, next: {value: 10, next: null}})
    })
    it('If the only node in list is removed, head and tail should both be null', function() {
      list.removeHead();
      expect(list.tail).to.equal(null)
      expect(list.head).to.equal(null)
    })
  })
  describe('Linked List contains', function() {
    let list;
    beforeEach(function(){
      list = new LinkedList();
      list.addToTail(5)
      list.addToTail(12)                   
      list.addToTail(1)                   
    });
    afterEach(function(done){
      done();
    });
    it('Should return a boolean value determining if list contains node with target value', function() {
      expect(list.contains(5)).to.equal(true);
      expect(list.contains(13)).to.equal(false);
      list.removeHead();
      expect(list.contains(5)).to.equal(false)
      expect(list.contains(12)).to.equal(true)
      expect(list.contains(1)).to.equal(true)
    })
    it('Should return false if list has no values', function() {
      list.removeHead();
      list.removeHead();
      list.removeHead();
      expect(list.contains(5)).to.equal(false)
    })
  })
});