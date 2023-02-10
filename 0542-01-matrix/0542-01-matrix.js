/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    //set m and n to the width and height
    let m = mat.length;
    let n = mat[0].length;
    //init queue and set to hold visited
    let queue = [];
    let visited = new Set();
    //loop thru the matrix
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
          //if current int is a zero push it to queue and add to visited
          if(mat[i][j] === 0) {
              queue.push([i, j]);
              visited.add(i + ',' + j);
          //else set current to infinity
          } else {
              mat[i][j] = Infinity;
          } 
        }
    }
    //init directions array
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    //iterate through queue
    while(queue.length) {
      //shift off the first tuple of queue
      let [x, y] = queue.shift();
      //loop thru directions array
      for(let [dx, dy] of directions) {
        //set i and j equal to the x and y coordinates added
        let i = x + dx;
        let j = y + dy;
        //if i or j are out of range, continue
        if (i < 0 || i >= m || j < 0 || j >= n) continue;
        //if its in the visited set continue
        if (visited.has(i + ',' + j)) continue;
        //else add it to visited set
        visited.add(i + ',' + j)
        //current matrix is equal to matrix at x and y + 1
        mat[i][j] = mat[x][y] + 1;
        //push i and j coords into queue
        queue.push([i, j])
      }

    }
    return mat
};