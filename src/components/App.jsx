import React, {useState} from 'react';

// const { current, undo, redo, record } = useRecord('#FF0000');

const useRecord = () => {
  const [current, setCurrent] = useState('#FF0000');
  // const [undo, setUndo] = useState([]);
  // const [redo, setRedo] = useState([]);
  const [record, setRecord] = useState([]);

  

};

function App() {
  // const { current } = useRecord();
  
  const handleClick = ({target}) => {
    //set the current color
    setCurrent({current: target.value});

    //push current color to the undo and redo arrays
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
