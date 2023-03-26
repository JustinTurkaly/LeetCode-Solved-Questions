/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
Input - an int representing number of rows to return
Output - the pascal's triangle represention of that many rows
Constr/Edge - input will be greater than 0
Plan - 
- check base cases
- init triangle with array of 1
- loop up to numRows, starting at 1
  - push a 1 into a temp array
  - assign prev row in the triangle
  - make a j loop over prevRowstarting at 1 to check rows above
    - assign temp array[j] the sum of the two ints above
  - push last 1
  - push temp array into results array
*/
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  
  const result = [[1]];
  
  for (let i = 1; i < numRows; i++) {
    const tempArray = [];
    tempArray.push(1);
    let prevRow = result[i - 1];
    for (let j = 1; j < prevRow.length; j++) {
      tempArray[j] = prevRow[j] + prevRow[j - 1];
    }
    tempArray.push(1);
    result.push(tempArray);
  }
  return result;
};