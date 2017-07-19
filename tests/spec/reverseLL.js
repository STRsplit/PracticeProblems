describe('reverseLinkedList', function() {
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
})