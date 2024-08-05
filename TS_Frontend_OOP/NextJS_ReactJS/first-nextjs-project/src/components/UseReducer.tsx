import { useReducer } from 'react';

const initialToDos = [
  {
    id: 1,
    title: 'To Do One',
    description: 'Description about To Do One',
    completed: false,
  },
  {
    id: 2,
    title: 'To Do Two',
    description: 'Description about To Do Two',
    completed: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((toDo) => {
        if (toDo.id === action.id) {
          return { ...toDo, completed: true };
        } else {
          return toDo;
        }
      });
    case 'IN_PROGRESS':
      return state.map((toDo) => {
        if (toDo.id === action.id) {
          return { ...toDo, completed: false };
        } else {
          return toDo;
        }
      });

    default:
      return state;
  }
};

export default function UseReducer() {
  const [toDos, dispach] = useReducer(reducer, initialToDos);

  const handleChange = (toDo) => {
    if (toDo.completed) {
      dispach({ type: 'IN_PROGRESS', id: toDo.id });
    } else {
      dispach({ type: 'COMPLETE', id: toDo.id });
    }
  };

  return (
    <>
      <p>UseReducer hook example with toDos:</p>
      <br />
      {toDos.map((toDo) => (
        <div key={toDo.id}>
          <input
            type='checkbox'
            checked={toDo.completed}
            onChange={() => handleChange(toDo)}
          />
          {toDo.title}
        </div>
      ))}
    </>
  );
}
