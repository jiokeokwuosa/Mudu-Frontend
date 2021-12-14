import API from "./../../../assets/js/api";
import { returnErrors } from "./errorActions";

import {
  ADD_ARTICLES_SUCCESS,
  ADD_ARTICLES_FAILURE,
  ARTICLES_INPUT_CHANGE,

  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  ADD_ARTICLES_REPLY_SUCCESS,
  ADD_ARTICLES_REPLY_FAILURE,
  DELETE_ARTICLES_SUCCESS,
  DELETE_ARTICLES_FAILURE,
  UPDATE_ARTICLES_SUCCESS,
  UPDATE_ARTICLES_FAILURE,
  SUBMIT_TODO_ITEM
} from "./types";

export const articleInputChange = (name, value) => async (dispatch) => {
  try {
    dispatch({
      type: ARTICLES_INPUT_CHANGE,
      payload: {
        name,
        value,
      },
    });
  } catch (error) {
    console.error(error);
  }
};


export const createArticle = (data) => async (
  dispatch
) => {
  try {       
    dispatch({
      type: ADD_ARTICLES_SUCCESS,
      payload:data    
    });   
  } catch (err) {      
    dispatch(
      returnErrors(
        err.response.data.errors
          ? err.response.data.errors
          : err.response.data.error,
        err.response.data.status,
        "ADD_ARTICLES_FAILURE"
      )
    );
    dispatch({
      type: ADD_ARTICLES_FAILURE,
    });
  }
};
export const updateArticle = (article, articleIndex) => async (
  dispatch
) => {
  try {       
    dispatch({
      type: UPDATE_ARTICLES_SUCCESS,
      payload:{
        article,
        articleIndex       
      }     
    });    
  } catch (err) {
    dispatch(
      returnErrors(
        err.response.data.errors
          ? err.response.data.errors
          : err.response.data.error,
        err.response.data.status,
        "UPDATE_ARTICLES_FAILURE"
      )
    );
    dispatch({
      type: UPDATE_ARTICLES_FAILURE,
    });
  }
};

export const deleteArticle= (articleIndex) => async (
  dispatch
) => {
  try { 
    dispatch({
      type: DELETE_ARTICLES_SUCCESS,
      payload:{
        articleIndex       
      }      
    });
  } catch (err) {  
    dispatch(
      returnErrors(
        err.response.data.errors
          ? err.response.data.errors
          : err.response.data.error,
        err.response.data.status,
        "DELETE_ARTICLES_FAILURE"
      )
    );
    dispatch({
      type: DELETE_ARTICLES_FAILURE,
    });
  }
};

