/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

/*
Input - matrix
Output - a boolean representing if the matrix is Toeplitz
Constr/Edge - no empty inputs
Plan - 
- loop thru matrix
  - compare current value to diagonal value
  - if not equal and not null return false
  - once out of for loop return true
*/
var isToeplitzMatrix = function(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[i].length - 1; j++) {
          let current = matrix[i][j];
          let diagonal = matrix[i + 1][j + 1];
          console.log(diagonal)
          if (current !== diagonal && diagonal !== undefined) {
              return false;
          } 
      }
  }
  return true;
};