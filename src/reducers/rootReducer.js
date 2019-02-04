import {combineReducers} from 'redux';
import CommentReducer from './commentReducer';

const rootReducer = combineReducers({
  commentState: CommentReducer
});

export default rootReducer;