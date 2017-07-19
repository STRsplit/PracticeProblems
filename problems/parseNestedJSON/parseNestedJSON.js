/* Given JSON object, parse out all keys.
i.e. 
{
  "a" : {
    "b" : {
      "c": {
        "d": "Pinnochio"
      }
    }
  }
} */




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
  "a" : 'hello',
  "b" : [{'a': 'b'}, 'j', 'y']
}

const drillDown = (obj, container = []) => {
  for(let keys in obj){
    if(obj.hasOwnProperty(keys)){
      container.push(keys)
      if(typeof obj[keys] === 'object'){
        drillDown(obj[keys], container)
      }
    }
  }
  return container;
}

