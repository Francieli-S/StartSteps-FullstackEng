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
