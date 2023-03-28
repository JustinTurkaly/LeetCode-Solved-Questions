/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

/*
Input - m x n int grid
Output - the modified grid with a flood fill applied
Constr/Edge - no empty inputs
Plan - 
 - make a recursive func to traverse the grid
   - check if next tile is out of bounds or not equal to original or equals color
   - assign color to current tile
   - recurse in 4 directions
   - return the modified image
*/
var floodFill = function(image, sr, sc, color) {
  const original = image[sr][sc];
  
  const traverse = (image, sr, sc) => {
    if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] !== original || image[sr][sc] === color) return image;
    
    image[sr][sc] = color;
    
    traverse(image, sr + 1, sc);
    traverse(image, sr - 1, sc);
    traverse(image, sr, sc + 1);
    traverse(image, sr, sc - 1);
    return image;
  }
  
  return traverse(image, sr, sc);
};