import {ADD_COMMENT} from '../actions';

const initState = {
  comments: []
};

const CommentReducer = (state = initState, action) =>{
  switch(action.type){
    case ADD_COMMENT:
      const newState = {
        comments: [action.payload, ...state.comments]
      }
      localStorage.setItem("comments", JSON.stringify(newState.comments));
      return newState;
    default:
      return state;
  }
}

export default CommentReducer;