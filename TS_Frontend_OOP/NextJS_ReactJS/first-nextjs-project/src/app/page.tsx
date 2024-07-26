'use client'
import { IPost } from '@/types'; // @ is pointing to src
import { createContext, useContext, useState } from 'react';

const DarkMode = createContext(false);

const posts: IPost[] = [
  {
    id: 1,
    title: 'post 1',
    comment: 'comment about post 1',
    creationDate: new Date(),
    user: { name: 'Foxy', surname: 'Gatinha', age: 4 },
  },
  {
    id: 2,
    title: 'post 2',
    comment: 'comment about post 2',
    creationDate: new Date(),
    user: { name: 'Gato', surname: 'Gatao', age: 7 },
  },
  {
    id: 3,
    title: 'post 3',
    comment: 'comment about post 3',
    creationDate: new Date(),
    user: { name: 'Belinha', surname: 'Xereta', age: 8 },
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <DarkMode.Provider value={dark}>
      <div className={dark ? 'bg-black text-white' : ''}>
      {posts.map((post) => (
        <div key={post.id}>
          <p>Post: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Comment: {post.comment ? post.comment : 'No comments'}</p>
          <div>
            <p>
              Created by: {post.user.name} {post.user.surname}
            </p>
            <p>User age: {post.user.age}</p>
          </div>
        </div>
      ))}
      <button onClick={() => setDark(!dark)}>Dark/Light</button>
      <ChildOne/>
      </div>
    </DarkMode.Provider>
  );
}

function ChildOne() {
  const dark = useContext(DarkMode);
  return (
    <>
      <p className={dark ? 'text-white' : ''}>ChildOne content</p>
      <ChildTwo/>
    </>
  );
}

function ChildTwo() {
  const dark = useContext(DarkMode);
  return (
    <>
      <p className={dark ? 'text-white' : ''}>ChildTwo content</p>
    </>
  );
}