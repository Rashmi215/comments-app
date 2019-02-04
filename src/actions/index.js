export const ADD_COMMENT = 'add_comment';

export const addComment = (comment) =>{
  return{
    type: ADD_COMMENT,
    payload: comment
  }
};