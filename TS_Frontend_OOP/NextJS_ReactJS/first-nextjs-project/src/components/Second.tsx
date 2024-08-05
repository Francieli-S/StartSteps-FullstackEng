import { useEffect, useState } from 'react';

export default function Second() {
  const [incrementSecond, setIncrementSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIncrementSecond((prev) => prev + 1), 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <>
      <p>Incrementing seconds: {incrementSecond}</p>
    </>
  );
}
