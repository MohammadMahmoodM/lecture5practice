import React, {useContext} from 'react';
import valueContext from './valueContext';

function Child(props) {
  let value = useContext(valueContext);
  return (
    <div>
      Child {value}; 
    </div>
  );
}

export default Child;