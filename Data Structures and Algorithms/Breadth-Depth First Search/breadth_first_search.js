const graph1 = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: [],
}

// A push to queue = ["A"] => A
//["B", "C"] => B
//["C", "D", "E"] => C
//["D", "E", "F"] => D
//[E, F] => E
//[F] => F
//[]

const bfs = (graph, startNode, outputElement) => {
  const queue = []
  const visited = {} // {A: true} // could be a Set because the complexity is O(1)

  queue.push(startNode)
  visited[startNode] = true

  while (queue.length > 0) {
    const currentNode = queue.shift() // A
    
    console.log('current: ', currentNode);
    console.log('queue: ', queue);

    outputElement.textContent += currentNode + ' '

    for (const neighbour of graph[currentNode]) {
      if (!visited[neighbour]) {
        queue.push(neighbour)
        visited[neighbour] = true
      }
    }
    console.log('visited: ', visited);
  }

}

const startBFS = () => {
  const outputElement = document.getElementById('outputBFS')
  bfs(graph1, 'A', outputElement)
}

// Afternoon task
// Updates to keyboard shortcuts … On Thursday 1 August 2024, Drive keyboard shortcuts will be updated to give you first-letter navigation.Learn more
function bfs(graph, startNode) {
    // Initialize the queue with the start node
    let queue = [startNode];
    // Initialize a set to keep track of visited nodes, starting with the start node
    let visited = new Set([startNode]);
    // Initialize the result list to store the order of visited nodes
    let result = [];

    // While there are nodes to process in the queue
    while (queue.length > 0) {
        // Dequeue the first node in the queue
        let node = queue.shift();
        console.log("\n\nqueue to unfold: " + queue)
        console.log("current node: " + node)

        // Add the node to the result list
        result.push(node);
        console.log("visited nodes: "+result)

        // Iterate over each neighbor of the current node
        let neighbors = graph[node]
        console.log("neighbors: "+ neighbors)

        for (let neighbor of neighbors) {
            console.log("\ncurrent neighbor: " + neighbor)

            // If the neighbor has not been visited yet
            if (!visited.has(neighbor)) {
                // Mark the neighbor as visited
                visited.add(neighbor);
                // Enqueue the neighbor
                queue.push(neighbor);
                console.log('queue to unfold: ' + queue)
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

console.log(bfs(graph, 'A'));  // Should return ['A', 'B', 'C', 'D', 'E']