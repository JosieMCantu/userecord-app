import React, { useState } from 'react';

export const useRecord = () => {
    const [current, setCurrent] = useState('');
    const [index, setIndex] = useState(-1);
    const [record, setRecord] = useState([]);

    const handleColorChange = ({ target }) => {
        const newColor = record.splice([index + 1], 0, target.value);
        setCurrent(target.value);
        setIndex(index + 1);
    }
    
    const handleUndoClick = () => {
        setIndex(index - 1);
        setCurrent(record[index - 1]);
    }

    const handleRedoClick = () => {
        setIndex(index + 1);
        setCurrent(record[index + 1]);
    }
    return { current, index, record, handleColorChange, handleUndoClick, handleRedoClick }
};