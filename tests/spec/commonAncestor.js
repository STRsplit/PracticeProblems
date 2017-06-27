describe('CommonAncestor', function() {
  describe('Check tree methods added via prototypal inheritance on instantiation', function() {
    let testTree;
    beforeEach(() => {
      testTree = new Tree('foo');
    })
    it('It should have an addChild method', function() {
      expect(testTree.addChild).to.be.a('function');
    })
    it('It should have a getClosestCommonAncestor method', function() {
      expect(testTree.getClosestCommonAncestor).to.be.a('function');
    })
    it('It should have a getAncestorPath method', function() {
      expect(testTree.getAncestorPath).to.be.a('function');
    })
    it('It should have a isDescendant method', function() {
      expect(testTree.isDescendant).to.be.a('function');
    })
    it('It should have a removeChild method', function() {
      expect(testTree.removeChild).to.be.a('function');
    })
  })
  describe('Check properties of newly instantiated tree', function() {
    let testTree;
    beforeEach(() => {
      testTree = new Tree('foo');
    })
    it('It should have a name of foo', function() {
      expect(testTree.name).to.equal('foo');
    })
    it('It should have a children array', function() {
      expect(testTree.children).to.deep.equal([]);
    })
  })
  describe('Tree should be able to add children', function() {
    let testTree;
    beforeEach(() => {
      testTree = new Tree('foo');
    })
    it('Tree should start with empty children array', function() {
      expect(testTree.children).to.deep.equal([]);
    })
    it('Adding child via method should add new tree to children array', function() {
      let firstChild = new Tree('bar')
      testTree.addChild(firstChild);

      expect(testTree.children.length).to.equal(1);
      expect(testTree.children[0].name).to.equal('bar');
      expect(testTree.children[0].children).to.deep.equal([]);
    })
    it('Children tree instances should also have properties of tree class', function() {
      let firstChild = new Tree('bar')
      testTree.addChild(firstChild);

      expect(testTree.children[0].addChild).to.be.a('function');
      expect(testTree.children[0].getAncestorPath).to.be.a('function');
    })
  })
  describe('Should be able to get ancestor path for any given child', function() {
    let grandma, mom, me, douglas;
    beforeEach(() => {
      grandma = new Tree('grandma');
      mom = new Tree('mom');
      grandma.addChild(mom);
      me = new Tree('me');
      mom.addChild(me);
      douglas = new Tree('douglas')
    })

    it('A tree node\'s ancestor path to a non existent node should return null', function() {
      expect(grandma.getAncestorPath(douglas)).to.equal(null);
    })
    it('A tree node\'s ancestor path to itself should return an array with only itself', function() {
      expect(grandma.getAncestorPath(grandma).length).to.equal(1);
      expect(grandma.getAncestorPath(grandma)[0]).to.deep.equal(grandma);
    })
    it('Should return the proper ancestor paths for all children elements', function() {
      expect(grandma.getAncestorPath(mom).length).to.equal(2);
      expect(grandma.getAncestorPath(mom)[1].name).to.equal('mom'); 

      expect(grandma.getAncestorPath(me).length).to.equal(3);
      expect(grandma.getAncestorPath(me)[2].name).to.equal('me'); 

    })

    it('Children tree instances should also produce ancestor paths', function() {
      expect(mom.getAncestorPath(mom).length).to.equal(1);
      expect(mom.getAncestorPath(me).length).to.equal(2);
      expect(mom.getAncestorPath(me)[1].name).to.equal('me'); 

      expect(me.getAncestorPath(me).length).to.equal(1);
      expect(me.getAncestorPath(me)[0].name).to.equal('me');
    })
  })
  describe('Should be able to produce closest common ancestor', function() {
    let grandma, mom, me, douglas;
    beforeEach(() => {
      grandma = new Tree('grandma');
      mom = new Tree('mom');
      grandma.addChild(mom);
      me = new Tree('me');
      mom.addChild(me);
      douglas = new Tree('douglas')
    })

    it('A tree node\'s closest common ancestor with an unknown member should return null', function() {
      expect(grandma.getClosestCommonAncestor(douglas, grandma)).to.equal(null);
    })
    it('A tree node\'s closest ancestor to itself should return itself', function() {
      expect(grandma.getClosestCommonAncestor(grandma, grandma).name).to.equal('grandma');
    })
    it('Should return the proper cloest ancestor between itself and children', function() {
      expect(grandma.getClosestCommonAncestor(mom, grandma).name).to.equal('grandma');
      expect(grandma.getClosestCommonAncestor(mom, me).name).to.equal('mom'); 

      expect(grandma.getClosestCommonAncestor(me, grandma).name).to.equal('grandma');
      expect(grandma.getClosestCommonAncestor(me, me).name).to.equal('me'); 
    })

    it('Children tree instances should also produce ancestor paths', function() {
      expect(mom.getClosestCommonAncestor(mom, mom).name).to.equal('mom');
      expect(mom.getClosestCommonAncestor(me, mom).name).to.equal('mom');

      expect(me.getClosestCommonAncestor(me, me).name).to.equal('me');
    })
  })
 describe('addChild Tree Method should work properly', function() {
    let testTree;
    beforeEach(() => {
      testTree = new Tree('foo');
    })
    it('It should add a child to the parent\'s children array', function() {
      let childTree = new Tree('bar');
      testTree.addChild(childTree);
      let secondChild = new Tree('zing');
      childTree.addChild(secondChild);
      assert.equal(testTree.children.length, 1, 'Child should be added to tree children array');
      assert.equal(testTree.children[0].name, 'bar', 'Child tree properties should be correct');
      assert.equal(childTree.children.length, 1, 'A child tree shoul be able to add children as well');
    });  
  })
});