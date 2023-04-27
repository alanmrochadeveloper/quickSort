function quickSort(array) {
  console.log('inside quick sort, array ', array)
  if (array.length < 2) return array;
  const pivot = array[0];
  let leftArr = []
  let rightArr = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      rightArr.push(array[i]);
    } else {
      leftArr.push(array[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const result = quickSort([2, 1, 23, 11, 65, 109, 99, 10]);

console.log({ result })
