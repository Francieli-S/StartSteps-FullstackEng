interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

// one way of async syntax
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if(!response.ok) {
    throw new Error ('Failed to get the data')
    // catch
  }
  // then
  return response.json()
}

// another way of async syntax
const ServerSide = async () => {
  const data: ITodo[] = await getData()
  return <>
  {/* pre tag gives me a hydration error on the browser */}
  {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  {JSON.stringify(data, null, 2)}
  </>
}

export default ServerSide