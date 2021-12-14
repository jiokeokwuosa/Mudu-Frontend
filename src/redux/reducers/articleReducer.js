import {
  ADD_ARTICLES_SUCCESS,
  ARTICLES_INPUT_CHANGE,

  GET_ARTICLES_SUCCESS,
  ADD_ARTICLES_REPLY_SUCCESS,
  DELETE_ARTICLES_SUCCESS,
  UPDATE_ARTICLES_SUCCESS,
  SUBMIT_TODO_ITEM
} from "../actions/types";

const initialState = {
  getArticleLoader: false,
  articles: [],
  addCommentLoader: false,
  newArticle: '',
  newArticleTitle: '',
  addCommentResponseLoader: false,
  newArticleReply: '',
  commentUpdateText: '',
  updateCommentResponseLoader: false,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {

    case ARTICLES_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case ADD_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      };

    case UPDATE_ARTICLES_SUCCESS:
      let allArticles = state.articles;
      allArticles[action.payload.articleIndex || 0] = action.payload.article;
      state.articles = [...allArticles]
      return {
        ...state
      }

    case DELETE_ARTICLES_SUCCESS:
      const updatedArticles = state.articles.filter(
        (article, index) => index !== action.payload.articleIndex
      )
      state.articles = [...updatedArticles]
      return {
        ...state
      }
    default:
      return state;
  }
};
export default articleReducer;