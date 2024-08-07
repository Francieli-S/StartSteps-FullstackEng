'use client';
import * as React from 'react';

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | null>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle}>
      <input
        type='text'
        id='title'
        placeholder='Title'
        value={article?.title}
        onChange={handleArticleData}
      />
      <input
        type='text'
        id='body'
        placeholder='Body'
        value={article?.body}
        onChange={handleArticleData}
      />
      <button onClick={addNewArticle}>Add article</button>
    </form>
  );
};

export default AddArticle;
