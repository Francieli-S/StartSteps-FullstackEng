'use client';
import { useEffect, useState, useContext } from 'react';
import { DarkMode } from '@/app/page';

export default function Data() {
  const dark = useContext(DarkMode);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (data) {
        setIsLoading(!isLoading);
      }
    }, 5000);
    return () => clearTimeout(timer)
  }, [data]);

  return (
    <div className={dark ? 'bg-black text-white' : ''}>
      <p>Products</p>
      {isLoading
        ? data.map((item) => <p key={item.id}>Name: {item.name}</p>)
        : 'Loading data...'}
    </div>
  );
}
