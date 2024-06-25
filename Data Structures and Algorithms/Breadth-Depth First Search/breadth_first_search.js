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