import { IPost } from "@/types"; // @ is pointing to src

const posts: IPost[] = [
  { id: 1, title: 'post 1', comment: 'comment about post 1' },
  { id: 2, title: 'post 2', comment: 'comment about post 2' },
  { id: 3, title: 'post 3', comment: 'comment about post 3' },
];

export default function Post() {
  return (
    posts.map(post => (
      <div>
        <p>Id: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Comment: {post.comment ? post.comment : 'No comments'}</p>
      </div>
    ))
  )
}