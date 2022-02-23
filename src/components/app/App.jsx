import React, { useState } from 'react';
import styles from '../app/App.css';

const useRecord = () => {
};

function App() {
  // const { current, undo, redo, record } = useRecord('#FF0000');
  const [current, setCurrent] = useState('');
  const [index, setIndex] = useState(-1);
  const [record, setRecord] = useState([]);

  console.log('CURRENT', current);
  console.log('RECORD', record);
  console.log('INDEX', index);

  const handleColorChange = ({ target }) => {
    const newColor = record.splice([index + 1], 0, target.value);
    setCurrent(target.value);
    setIndex(index + 1);
  }

  const handleUndoClick = () => {
    
    setCurrent(record[index - 1]);
    setIndex(index - 1);
  }

  const handleRedoClick = () => {
    setIndex(index + 1);
    setCurrent(record[index + 1]);
  }
 
  return (
    <>
      <div className={styles.buttons}>
        <button disabled={index === -1} onClick={handleUndoClick}>undo</button>
        <button  disabled={index === record.length - 1} onClick={handleRedoClick}>redo</button>
        <input type='color' value={current} onChange={handleColorChange} />
      </div>
      
      <div style={{ 
        marginLeft: '50px',
        marginTop: '10px',
        background: current, 
        width: '10rem', 
        height: '10rem',
        border: '3px solid black',
        borderRadius: '5px'}}></div>
    </>
  )
}

export default App;


