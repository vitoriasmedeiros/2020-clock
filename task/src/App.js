import React from 'react';
import ComputerClock from './components/Clock/ComputerClock';
import WordClock from './components/Clock/WordClock';
function App(props) {
  return (<div>
    <h1>Clock: Exemplo de acesso a API externa</h1>
    <ComputerClock />
    <WordClock />
   
  </div>);
}

export default App;
