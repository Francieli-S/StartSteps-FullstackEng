'use client';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addArticle, removeArticle } from '../store-articles/actionCreators';
import AddArticle from './AddArticle';
import SingleArticle from './SingleArticle';

const Articles: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles
  ); // this function access the store data, by using 'useSelector()'

  const dispatch: Dispatch<any> = useDispatch(); // to dispatch the reducer(update the data)

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>All Articles:</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article) => (
        <SingleArticle
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default Articles;
