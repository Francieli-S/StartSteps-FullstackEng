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

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      if (response.status === 200) {
        const data = await response.json()
        setLoading(false)
        setTodos(data)
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => {
  //       // handle the response here
  //       console.log(response);
  //       if (response.status === 200) return response.json();
  //     })
  //     .then((data: ITodo[]) => {
  //       console.log(data);
  //       setLoading(false);
  //       setTodos(data);
  //     })
  //     .catch((error: Error) => {
  //       // if no response or error in the request, handle the error
  //       console.log(error);
  //       setLoading(false);
  //       setError(error);
  //     });
  // }, []);

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
