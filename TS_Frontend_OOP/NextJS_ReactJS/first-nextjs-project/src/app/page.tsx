
import { IPost } from '@/types'; // @ is pointing to src

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
    return (
    <>
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
    </>
  );
}