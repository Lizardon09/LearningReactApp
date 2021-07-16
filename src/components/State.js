import React, { useState } from 'react';

function State() {
    const initialValue = 5;
    const increment = 5;

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => setCounter(counter + increment);

    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

export default State;