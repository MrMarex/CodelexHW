import { useState, useEffect } from 'react'

export default function InputForm () {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [isFirstRender, setIsFirstRender] = useState(true);
  
    useEffect(() => {
      if (isFirstRender) {
        console.log('First render');
        setIsFirstRender(false);
      }
    }, []);
  
    useEffect(() => {
      console.log('Render');
    }, []);
  
    useEffect(() => {
      console.log('Changing count');
    }, [count]);
  
    useEffect(() => {
      console.log('Input change');
    }, [inputValue]);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div className="container container-form">
        <button onClick={handleClick} className="button is-warning">+</button>
        <div className="count">Count: {count}</div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="input is-primary"
        />
        <div className="text-shadow">{inputValue}</div>
      </div>
    );
};
