'use client';
import { useContext, useMemo, useState } from 'react';
import { LangContext } from '../context/LangWrapper';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const lang = useContext(LangContext);

  // useMemo hook for optivization, so this calculation happen again only when count is updated
  // and not when other states are updated or the page ir rerender
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      {lang === 'en' ? 'Count' : 'Zahlen'}: {count}
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <br />
      <p>Expensive Calc result: </p>
      {calculation}
    </div>
  );
};

export default Counter;

const expensiveCalculation = (num: number) => {
  console.log('Calculating...');
  for (let i = 0; i < 10000000; i++) {
    num += 1;
  }
  return num;
};
