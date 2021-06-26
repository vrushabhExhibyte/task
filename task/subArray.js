const arr = [1, 2, 4, -1, 6, 1];

const subArraysCountBySum = (array, k, s) => {
    let a1 = [];
    let n = array.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += array[j];
      if (sum == s) {
        const a2 = array.slice(i, j + 1);
        if (a2.length <= k) {
          a1.push(a2);
        }
      }
    }
  }
  return a1.length;
};

const count = subArraysCountBySum(arr, 3, 6);
console.log(count);