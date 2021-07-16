import React, { useState } from 'react';

function State() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

export default State;