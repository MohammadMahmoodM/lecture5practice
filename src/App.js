import React from 'react';
import './App.css';
import Parent from './Parent';
import valueContext from './valueContext';

function App() {
  //let [number, setNumber] = React.useState(45);
  let value = 82;
  return (
    // without valueContext.Provider it will give default value.
    <valueContext.Provider value={value}>    
      <div>
        Hello World
       <Parent></Parent>
      </div>
    </valueContext.Provider>
    //FOr use state alone
    // <div>
    //   Hello World
    //   <Parent num = {number}></Parent>
    //   <button onClick={() => { setNumber(++number) }}>New Number</button>
    // </div>
  );
}

export default App;
