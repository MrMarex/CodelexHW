import { useState, useEffect } from 'react'

export default function InputForm2 () {
    const [count, setCount] = useState(100);
    const [inputValue, setInputValue] = useState("");
    const [textSize, setTextSize] = useState(12);
  
    useEffect(() => {
      document.title = inputValue;
    }, [inputValue]);
  
    const handleClick = () => {
      setCount(count + 1);
      setTextSize(textSize + 1);
    };
  
    return (
      <div className="container container-form">
        <button onClick={handleClick} className="button is-warning">+</button>
        <div className="count" style={{ fontSize: textSize }}>Count: {count}</div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="input is-primary"
        />
      </div>
    );
};