'use client';
import { useState, useEffect } from 'react';

interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const FetchComponent: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>();

  // using async/await is not possible in the client side; it worked here, maybe, because I called the
  // function inside the useEffect. But it is also not a good practice await for the data in the UI, otherwise the code 
  // will not hit the 'Loading...' part.
  // 
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     if (response.status === 200) {
  //       const data = await response.json()
  //       setLoading(false)
  //       setTodos(data)
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     // setError(error); // in this example, the error setting gives me a warn.
  //   }
  // }
  // useEffect(() => {
  //   fetchData()
  // }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => { // resolved
        // handle the response here
        console.log(response);
        return response.json();
      })
      .then((data: ITodo[]) => { // resolved
        // got the data succefully
        console.log(data);
        setLoading(false);
        setTodos(data);
      })
      .catch((error: Error) => { // rejected
        // if no response or error in the request, handle the error
        console.log(error);
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error happened: {error.message}</p>;
  }
  return (
    // <p>{JSON.stringify(todos, null, 2)}</p>
    todos && todos.map((todo) => (
      <div key={todo.id}>
        <h4>Todo: </h4>
        <h1>{todo.title}.</h1>
        <p>{todo.completed === false ? 'NOT DONE': 'DONE'}</p>
        <p>{todo.userId}</p>
        <br />
      </div>
    ))
  );
};

export default FetchComponent;
