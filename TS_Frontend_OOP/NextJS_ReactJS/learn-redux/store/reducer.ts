const initialState: ArticleState = {
  articles: [
    { id: 1, title: 'Article One', body: 'Article One - content' },
    { id: 2, title: 'Article Two', body: 'Article Two - content' },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const newArticle: IArticle = {
        id: Math.random(),
        title: action.article.title,
        body: action.article.body,
      };
      return { ...state, articles: state.articles.concat(newArticle) };
    case 'REMOVE_ARTICLE':
      const updateArticle: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return { ...state, articles: updateArticle };
  }
  return state;
};

export default reducer;
