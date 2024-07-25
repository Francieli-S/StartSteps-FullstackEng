import { IPost, PostParams } from '@/types'; // @ is pointing to src

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

export default function Post({ params }: PostParams) {
  const id = parseInt(params.id); // '1'
  const post = posts.find((post) => post.id == id); //null 1 === '1'
  return (
    <>
      {post ? (
        <>
          <p>Title: {post.title}</p>
          <p>Content: {post.comment ? post.comment : 'Not Found'}</p>
        </>
      ) : (
        <p>Not Found</p>
      )}
    </>
  );
}
