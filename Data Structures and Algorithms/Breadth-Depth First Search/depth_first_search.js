const graph2 = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: [],
};

// ["A"], A
// ["B", "C"] => "C"
// ["B", "F"] => "F"
// ["B", "D", "E"] => "E"
// ["B", "D"] => "D"
// ["B"] => "B"
//[]
const dfs = (graph, startNode, outputElement) => {
  const stack = [];
  const visited = {};

  stack.push(startNode);
  visited[startNode] = true;

  while (stack.length > 0) {
    const currentNode = stack.pop();

    console.log('current: ', currentNode);
    console.log('stack: ', stack);

    outputElement.textContent += currentNode + ' ';

    for (let i = graph[currentNode].length - 1; i >= 0; i--) {
      const neighbour = graph[currentNode][i];

      if (!visited[neighbour]) {
        stack.push(neighbour);
        visited[neighbour] = true;
      }
    }
    console.log('visited: ', visited);
  }
};

const startDFS = () => {
  const outputElement = document.getElementById('outputDFS');
  dfs(graph2, 'A', outputElement);
};

// Afternoon task
function dfs(graph, startNode) {
  // Initialize the stack with the start node
  let stack = [startNode];
  // Initialize a set to keep track of visited nodes, starting with the start node
  let visited = new Set([startNode]);
  // Initialize the result list to store the order of visited nodes
  let result = [];

  // While there are nodes to process in the stack
  while (stack.length > 0) {
      // Pop the last node from the stack
      let node = stack.pop();
      console.log("\n\nStack to unfold: " + stack);
      console.log("Current node: " + node);

      // Add the node to the result list
      result.push(node);
      console.log("Visited nodes: " + result);

      // Iterate over each neighbor of the current node
      let neighbors = graph[node];
      console.log("Neighbors: " + neighbors);

      for (let neighbor of neighbors) {
          console.log("\nCurrent neighbor: " + neighbor);

          // If the neighbor has not been visited yet
          if (!visited.has(neighbor)) {
              // Mark the neighbor as visited
              visited.add(neighbor);
              // Push the neighbor onto the stack
              stack.push(neighbor);
              console.log('Stack to unfold: ' + stack);
          } else{
              console.log('Node already visited')
          }
      }
  }

  // Return the list of nodes in the order they were visited
  return result;
}

// Test case
let graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B'],
  E: ['C']
};

console.log(dfs(graph, 'A'));  // Should return ['A', 'B', 'D', 'C', 'E']
