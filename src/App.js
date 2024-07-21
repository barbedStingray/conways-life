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

  const totalRows = theGrid.length;
  const totalColumns = theGrid[0].length;

  // main function
  function runConwaysLife(theGrid) {
    console.log('running life', theGrid);

    let livingNeighbors = 0;
    // lets think in terms of coordinates X & Y
    // [row, column] - x, y
    const coordinates = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], ['cell'], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];


  
    // loop through each item - gained position
    for (let row = 0; row < totalRows; row++) {
      for (let col = 0; col < totalColumns; col++) {
        console.log('position', row, col);
      }
    }

    // every item has cells around it. 
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
