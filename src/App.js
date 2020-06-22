import React from 'react';
import './App.css';
import Parent from './Parent';

function App() {
  let [number, setNumber] = React.useState(45);
  return (
    <div>
      Hello World
      <Parent num = {number}></Parent>
      <button onClick={() => { setNumber(++number) }}>New Number</button>
    </div>
  );
}

export default App;
