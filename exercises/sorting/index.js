// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    for (let jdx = 0; jdx < (arr.length - idx - 1); jdx += 1) {
      if (arr[jdx] > arr[jdx + 1]) {
        const lesser = arr[jdx + 1];
        arr[jdx + 1] = arr[jdx];
        arr[jdx] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    let indexOfMin = idx;

    for (let jdx = idx + 1; jdx < arr.length; jdx += 1) {
      if (arr[jdx] < arr[indexOfMin]) {
        indexOfMin = jdx;
      }
    }

    if (indexOfMin !== idx) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[idx];
      arr[idx] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push((left.shift()));
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = {
  bubbleSort,
  selectionSort,
  mergeSort,
  merge
};
