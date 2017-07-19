/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.hashIt = (key) => {
    let hvLocation = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[hvLocation] || [];
    return [hvLocation, bucket];
  }
  result.checkCollision = function(bucket, tupleKey) {
    return bucket.reduce((accum, [key, val], ind) => {
      if(key === tupleKey){
        accum = ind
      }
      return accum;
    }, false)
  }
  result.insert = function(key, value) {
    let [ hvLocation, bucket ] = this.hashIt(key);
    let tuple = [key, value];
    let collided = this.checkCollision(bucket, key) !== false;

    if(bucket.length && collided){
      bucket[this.checkCollision(bucket, key)] = tuple;
    } else {
      bucket.push(tuple)
    }
    storage[hvLocation] = bucket;
  };

  result.retrieve = function(key) {
    let [ hvLocation, bucket ] = this.hashIt(key);
    let collided = this.checkCollision(bucket, key) !== false;
    if(bucket.length && collided){
      return bucket[this.checkCollision(bucket, key)][1]
    }
    return null;
  };

  result.remove = function(key) {
    let [ hvLocation, bucket ] = this.hashIt(key);
    let collided = this.checkCollision(bucket, key) !== false;
    if(bucket.length && collided){
      let [ removedTuple ] = bucket.splice(this.checkCollision(bucket, key), 1)
      storage[hvLocation] = bucket;
      return removedTuple[1];
    }
    return null;
  };
  result.getStorage = function(){
    return storage;
  }

  return result;
};

