'use client';
import { useContext, useState } from 'react';
import { LangContext } from '../context/LangWrapper';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const lang = useContext(LangContext);

  return (
    <div>
      {lang === 'en' ? 'Count' : 'Zahlen'}: {count}
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
