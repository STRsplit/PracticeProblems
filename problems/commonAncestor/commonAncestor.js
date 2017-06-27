
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function(name) {
  this.name = name;
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(subject1, subject2) {
//check that both exist in the tree
  //if both are same, return either
  if(subject1.name === subject2.name){
    return subject1;
   }
  //get paths of both subjects
  let [ subject1Path, subject2Path ] = [this.getAncestorPath(subject1), this.getAncestorPath(subject2)]
  //if neither one or other not descendant, return null
  if(!subject1Path || !subject2Path){
    return null;
  }
  //find shorter path
  let [ shortPath, longPath ] = [subject1Path, subject2Path].sort((a,b) => {
    return a.length - b.length
  });
  let lastChild = longPath[longPath.length - 1]
    //starting at end of shortest, iterate backwards through path
  for(let i = shortPath.length - 1; i >= 0; i--){
    //declare variable and assign curr iteration value to it
    let currRelative = shortPath[i];
    //check end of other branch is descendant of curr iteration value
    if(currRelative.isDescendant(lastChild)){
      //if true return curr iteration value
      return currRelative;
    }
  }
  return null;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(subject) {
  // first add the tree instance into the path,
    //then iterate through children
      //subject descendant of child? add to path
  let ancestorPath = [];
  if(!this.isDescendant(subject) && this.name !== subject.name){
    return null
  } 
  if(this.name === subject.name){
    return [this]
  }
  ancestorPath.push(this)

  for(let i = 0; i < this.children.length; i++){
    let child = this.children[i];
    if(this.isDescendant(child)){
      ancestorPath = ancestorPath.concat(child.getAncestorPath(subject) || [])
    }
  }
  return ancestorPath;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

