import React, { useContext } from 'react';
import valueContext from './valueContext';

function Child() {
  let value = useContext(valueContext);
  console.log("value", value);
  return (
    <div>
      Child {value[0]}; 
      <button onClick={() => {value[1](++value[0])}}> Update value</button>
    </div>
  );
}

export default Child;