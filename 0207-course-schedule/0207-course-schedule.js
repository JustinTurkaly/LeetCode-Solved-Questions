/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*
Input - an int, and an array of tuples
Output - a boolean, representing if its possible to finish all courses
Constraints - empty pre req array, unique tuples

Pseudo - 
1 - convert input to adj list
2 - create visited obj and init arrive and departed to array of 0s
3 - loop thru adj list
4 - if has not been visited yet check if has a cycle, if true then return false

*/

const buildAdjacency = (n, edges) => {
  let adjList = Array.from({length: n}, ()=>[]);
  
  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest)
  }
  return adjList
}

const hasCycle = (node, adjList, visited, arrive, depart) => {
  
  arrive[node]++;
  visited[node] = true;
  
  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      if (hasCycle(neighbor, adjList, visited, arrive, depart)) return true;
    } else {
      if (depart[neighbor] === 0) return true;
    }
    
  }
  depart[node]++;
  return false;
}

var canFinish = function(numCourses, prereq) {
  let adjList = buildAdjacency(numCourses, prereq);
  let visited = {};
  let arrive = Array.from({length: numCourses}, () => 0);
  let depart = Array.from({length: numCourses}, () => 0);
  
  for (let i = 0; i < adjList.length; i++) {
    if (!visited[i]) {
      if (hasCycle(i, adjList, visited, arrive, depart)) return false;
    }
  }
  
  return true;
};