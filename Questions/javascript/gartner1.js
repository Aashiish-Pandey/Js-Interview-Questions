// check series

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [2, 4, 6, 8, 10];
const arr3 = [1, 1, 2, 3, 5, 8];

const checkSeries = (arr) => {
  let ap = true;
  let gp = true;
  let feb = true;

  let d = arr[1] - arr[0];
  let r = arr[2] / arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 2;
    let ratio = arr[i + 1] / arr[i];
    let diff = arr[i + 1] - arr[i];
    if (diff !== d) {
      ap = false;
    }
    if (ratio !== r) {
      gp = false;
    }
    if (arr[j] && arr[j - 1] + arr[j - 2] !== arr[j]) {
      feb = false;
    }
  }

  return { ap, gp, feb };
};

const findNextTerm = (arr) => {
  let nextTerm = 0;
  let { ap, gp, feb } = checkSeries(arr);
  if (ap) {
    let d = arr[1] - arr[0];

    nextTerm = arr[arr.length - 1] + d;
  } else if (gp) {
    let r = arr[2] / arr[1];
    nextTerm = arr[arr.length - 1] * r;
  } else {
    nextTerm = arr[arr.length - 1] + arr[arr.length - 2];
  }

  return nextTerm;
};

console.log(findNextTerm([ 3,6,9,12,15]));

