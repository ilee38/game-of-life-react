import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = props => {

  const [isAlive, setIsAlive] = useState(false);

  useEffect(() => {
    let c = document.getElementById("grid");
    let ctx = c.getContext("2d");
    ctx.fillRect(0,0,20,20);
    ctx.fillRect(40,0,20,20);
  });

  return(
    <div>
      <p>I'm the grid!</p>
      <canvas id="grid"
              height={500}
              width={500} />
    </div>
  );
}

export default Grid;