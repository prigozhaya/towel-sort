
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];

  for (let i in matrix) {
    if (i % 2 === 0) {
      for (let j in matrix[i]) {
        arr.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        arr.push(matrix[i][j]);
      }
    }
  }
  return arr;
}
