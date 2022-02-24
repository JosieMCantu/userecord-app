import React from 'react';
import styles from '../app/App.css';
import { useRecord } from '../../hooks/useRecord';

function Record() {
    const { current, index, record, handleColorChange, handleUndoClick, handleRedoClick } = useRecord('#FF0000');
    
    return (
      <>
        <div className={styles.buttons}>
          <button disabled={index < 0} onClick={handleUndoClick}>undo</button>
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

export default Record