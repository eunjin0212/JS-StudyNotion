function filterFunc(arr, predicate) {
  const newArr = [];
  let newArrIndex = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (predicate(arr[i])) {
      newArr[newArrIndex] = arr[i];
      newArrIndex++;
    }
  }
  return newArr;
}

exports.filterFunc = filterFunc;
