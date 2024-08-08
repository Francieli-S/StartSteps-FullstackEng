'use client';
import { useState, useEffect } from 'react';

interface Todo {
  id: number
  title: string
  completed: boolean
}

const FetchComponent: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        // handle the response here
        console.log(response);
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setTodos(data);
      })
      .catch((error) => {
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
    return <p>An error happened.</p>;
  }
  return (
    // <p>{JSON.stringify(todos, null, 2)}</p>
    todos.map((todo) => (
      <div key={todo.id}>
        <h4>Todo: </h4>
        <h1>{todo.title}.</h1>
        <p>{todo.completed === false ? 'NOT DONE': 'DONE'}</p>
        <br />
      </div>
    ))
  );
};

export default FetchComponent;
