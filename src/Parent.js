import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div>
      Parent
      <Child></ Child>
       {/* <Child num ={props.num}> </ Child>   for state */}
    </div>
  );
}

export default Parent;