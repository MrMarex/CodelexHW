import { useState } from 'react'

export default function CounterSet () {
    const [count, setCount] = useState(0);
  
    return (
      <div className="container-counters">
        <button
          onClick={() => setCount(count + 1)}
          className="button is-primary">
            Click me ({count})
        </button>
        <div className="double-counter">{count * 2}</div>
      </div>
    );
  };