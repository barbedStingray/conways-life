import React, { useState } from 'react';
import './App.css';

function App() {

  // the rules
  // cell < 2 live neighbors dies
  // cell == 2-3 live neighbors lives
  // cell > 3 live neighbors dies 
  // dead cell === 3 live neighbors comes back to life

  const [theGrid, setTheGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function runConwaysLife(theGrid) {
    console.log('running life', theGrid);

    // check parameters of each cell
    // update each cell based on parameters
    // reset theGrid Array


  }


  return (
    <div className="App">
      <div className='lifeGrid'>
        {theGrid.flat().map((cell, index) => (
          <div key={index} className='gridCell'>{cell}</div>
        ))}
      </div>

      <button onClick={() => runConwaysLife(theGrid)}>RUN LIFE</button>
    </div>
  );
}

export default App;
