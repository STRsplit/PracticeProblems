const allsubSets = (numbers) => {
 let result = [];

 const walk = (startIdx, set = new Set()) => {
  console.log(set)
  if (set.size === numbers.length) {
    result.push([...set.keys()]);
    return;
  }

  for (let idx = startIdx; idx < numbers.length; idx++) {
    set.add(numbers[idx]);
    walk(idx + 1, set);
    set.delete(numbers[idx]);
  }

  return;
 }

 walk (0);
 return result;
}