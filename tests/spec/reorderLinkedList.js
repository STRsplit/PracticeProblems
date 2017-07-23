describe('reorderLinkedList', function() {
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
  describe('Reorder function and helpers exist', function() {
    it('Should have the cutList helper function', function() {
      expect(cutList).to.be.a('function');
    })
    it('Should have the getLength helper function', function() {
      expect(getLength).to.be.a('function');
    })
    it('Should have the main reorderList function', function() {
      expect(reorderList).to.be.a('function');
    })
    it('Should have the reverseList helper function', function() {
      expect(reverseList).to.be.a('function');
    })
  })
  describe('Helper: cutList Basic Functionality', function() {
    it('Should return null if passed null value', function() {
      expect(cutList(null)).to.equal(null);
    })
    it('Should return if passed midpoint of 0', function() {
      let list = new LinkedList();
      list.addToTail(5)
      expect(cutList(list.head, 0)).to.equal(null);
    })
    it('Should return second half of 2 item list', function() {
      let list = new LinkedList();
      list.addToTail(5)
      list.addToTail(11)
      list.addToTail(50)
      expect(cutList(list.head, 1)).to.deep.equal({value: 50, next: null});
    })
    it('Should correctly modify first half of multiple item list', function() {
      let someList = new LinkedList();
      someList.addToTail(5)
      someList.addToTail(11)
      someList.addToTail(50)
      cutList(someList.head, 1);
      expect(someList.head.next).to.deep.equal({value: 11, next: null})
    })
    it('Should return second half of multiple item list', function() {
      let someList = new LinkedList();
      someList.addToTail(5)
      someList.addToTail(11)
      someList.addToTail(50)
      someList.addToTail(100)
      expect(cutList(someList.head, 1)).to.deep.equal({value: 50, next: {
      value: 100, next: null }})
    })
    it('Should still have values in first half of list', function() {
      let someList = new LinkedList();
      someList.addToTail(5);
      someList.addToTail(11);
      someList.addToTail(50);
      someList.addToTail(100);
      someList.addToTail(14);
      cutList(someList.head, 2);
      expect(someList.contains(11)).to.be.true;
      expect(someList.contains(50)).to.be.true;
      expect(someList.contains(100)).to.be.false;
      expect(someList.contains(14)).to.be.false;
    }) 
  })
  describe('Helper: getLength Basic Functionality', function() {
    it('Should return 0 if passed a 0 length list', function() {
      let lenList = new LinkedList()
      expect(getLength(lenList.head)).to.equal(0);
    })
    it('Should return 1 passed in list with one node', function() {
      let lenList = new LinkedList();
      lenList.addToTail(5)
      expect(getLength(lenList.head)).to.equal(1);
    })
    it('Should return 3 passed in list with 3 nodes', function() {
      let lenList = new LinkedList();
      lenList.addToTail(5)
      lenList.addToTail(15)
      lenList.addToTail(25)
      expect(getLength(lenList.head)).to.equal(3);
    })
  })
  describe('Helper: reverseList Basic Functionality', function() {
    it('Should return node as is if list only made of one node', function() {
      let revList = new LinkedList();
      revList.addToTail(5)
      expect(reverseList(revList.head)).to.deep.equal({value: 5, next: null});
    })
    it('Should return list in reverse order', function() {
      let revList = new LinkedList();
      revList.addToTail(5);
      revList.addToTail(20)
      expect(reverseList(revList.head)).to.deep.equal({value: 20, next: {value: 5, next: null}});
    })
    it('Should have tail node at head ie reversed', function() {
      let revList = new LinkedList();
      revList.addToTail(5);
      revList.addToTail(20)
      revList.addToTail(500);
      revList.addToTail(1);
      revList.addToTail(22);
      let ourList = reverseList(revList.head);
      expect(ourList.value).to.equal(22);
      expect(ourList.next.value).to.equal(1);
      expect(ourList.next.next.value).to.equal(500);
      ourList.head = {value: ourList.value, next: ourList.next}
      expect(revList.contains.call(ourList, 5)).to.be.true;
      expect(revList.contains.call(ourList, 20)).to.be.true;
    })
  })
  describe('Main function: Reorder Linked List', function() {
    it('Should return node as is if list only made of one node', function() {
      let list = new LinkedList();
      list.addToTail(5)
      reorderList(list.head)
      expect(list.head).to.deep.equal({value: 5, next: null});
    })
    it('Should not swap values if only 2 nodes in list', function() {
      let list = new LinkedList();
      list.addToTail(5)
      list.addToTail(20)
      reorderList(list.head)
      expect(list.head.value).to.equal(5);
      expect(list.head.next).to.deep.equal({value: 20, next: null});
    })
    it('Should have tail node as next in reorder', function() {
      let list = new LinkedList();
      list.addToTail('a')
      list.addToTail('b')
      list.addToTail('c')
      reorderList(list.head)
      expect(list.head.next.value).to.equal('c')
      expect(list.head.next).to.deep.equal({value: 'c', next: {value: 'b', next: null}})
    })
    it('Should handle longer lists', function() {
      let list = new LinkedList();
      list.addToTail('a')
      list.addToTail('b')
      list.addToTail('c')
      list.addToTail('d')
      list.addToTail('e')
      reorderList(list.head)
      expect(list.head.next.value).to.equal('e')
      expect(list.head.next.next.value).to.equal('b')
      expect(list.contains('d'))
    })
  })

});