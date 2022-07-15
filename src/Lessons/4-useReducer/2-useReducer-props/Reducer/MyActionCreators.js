import {
  WRITE     ,
  INCREMENT ,
  DECREMENT ,
  RESET     ,
} from "./MyActionTypes"

export const write = (event) => ({
  type    : WRITE              ,
  payload : event.target.value ,
});
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const reset     = () => ({type: RESET    });