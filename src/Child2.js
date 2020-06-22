import React, {useContext, useReducer} from 'react';
import numberReducer from './numberReducer';

function Child2() {
let [state, dispatch] = React.useReducer(numberReducer, 52)
  return (
    <div>
      Chils2 {state}
      <button onClick={() => dispatch({type: 'INCREMENT', val: 35})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT', val: 35})}>Decrement</button>
    </div>
  );
}

export default Child2;