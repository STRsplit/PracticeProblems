/* Given JSON object, parse out all keys.

let x = {
  "a" : {
    "b" : {
      "c": {
        "d": "Pinnochio"
      }
    }
  }
} 

let y = { 
  "a" : {c: {d: 'hello'}},
  "b" : [{'a': 'b'}, 'j', 'y']
} */



const parseIt = (obj, container = []) => {
  for(let keys in obj){
    if(obj.hasOwnProperty(keys)){
      container.push([keys, obj[keys]])
      if(typeof obj[keys] === 'object'){
        parseIt(obj[keys], container)
      }
    }
  }
  return container;
}

const printKeys = (obj, container = []) => {
  for(let keys in obj){
    if(obj.hasOwnProperty(keys)){
      console.log(keys)
      if(typeof obj[keys] === 'object'){
        printKeys(obj[keys], container)
      }
    }
  }
}

