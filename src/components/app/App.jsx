import React, { useState } from 'react';

// record - function to record a new current value
// undo - function that sets the current value to the previous value
// redo - function that sets the current value forward in history
// current - the current value

const useRecord = () => {

};

function App() {
  const [current, setCurrent] = useState('#FF0000');
  const [undo, setUndo] = useState('');
  const [redo, setRedo] = useState('');
  const [record, setRecord] = useState([]);

  console.log('current', current);
  console.log('undo', undo);
  console.log('redo', redo);
  console.log('record', record);
  // const { current, undo, redo, record } = useRecord('#FF0000');

  const handleClick = ({ target }) => {
    
    setCurrent(target.value);
    setRecord(record.concat(current));
  }

  return (
    <>

      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input type='color' value={current} onChange={handleClick} />

      <div style={{ background: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}

export default App;

// Behavior

// select a color (e.g red), see the square change (to red)
// select another color (e.g blue), see the square change (to blue)
// select another color (e.g green), see the square change (to green)

// press undo, see the square change to the second color (blue) 
// press undo, see the square change to the first color (red)

// press redo, see the square change to the second color (blue)
// select another color (e.g yellow), see the square change (to yellow)

// press undo, see the square change to the second color (blue)
// press undo, see the square change to the first color (red)

// press redo, see the square change to the second color (blue)
// press redo, see the square change to the fourth color (yellow)
// press redo, see the square change to the third color (green)

// Write a test to test behavior
