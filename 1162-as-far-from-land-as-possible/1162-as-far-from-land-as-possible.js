/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
Input - nxn grid, 0's are water, 1's are land
Output - the cell that is the max distance from land
Constr/Edge - If no land or water exists in the grid, return -1

Pseudo - 
1 - loop through grid
2 - push each land coordinate with distance into a queue
3 - use bfs while loop and reassign max distance
4 - shift off first part of queue and iterate over each direction
5 - if next cell is inbounds and in water, push into queue and assign cell as visited
*/
var maxDistance = function(grid) {
   const n = grid.length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j, 0]);
            }
        }
    }
    if (queue.length === 0 || queue.length === n * n) {
        return -1;
    }
    let max = -1;
    while (queue.length > 0) {
        const [i, j, dist] = queue.shift();
        max = Math.max(max, dist);
        for (const [di, dj] of dirs) {
            const ii = i + di;
            const jj = j + dj;
            if (ii >= 0 && ii < n && jj >= 0 && jj < n && grid[ii][jj] === 0) {
                grid[ii][jj] = 1;
                queue.push([ii, jj, dist + 1]);
            }
        }
    }
    return max;
};