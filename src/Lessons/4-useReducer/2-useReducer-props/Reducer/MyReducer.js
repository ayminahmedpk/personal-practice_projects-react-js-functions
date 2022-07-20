

import {
  WRITE,
  INCREMENT,
  DECREMENT,
  RESET
} from './MyActionTypes';


export const initialState = {
  textValue: '[default]',
  count: 0,
}

export const MyReducer = (state, action) => {
  switch(action.type) {
    
    case WRITE:
      return {
        ...state,
        textValue: action.payload,
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }

    case RESET:
      return {
        textValue: '[reset]',
        count: 100,
      }
    
    default:
      throw new Error();

  }
};