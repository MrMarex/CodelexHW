import { useState, useRef, useEffect } from 'react'

export default function FocusedInput (){
    const firstInputRef = useRef<HTMLInputElement>(null);
    const [values, setValues] = useState<string[]>([]);
    const [secondInputValue, setSecondInputValue] = useState('');
  
    const handleClick = () => {
      setValues([...values, secondInputValue]);
      setSecondInputValue('');
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    };
  
    useEffect(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, []);
  
    return (
      <div className='form form--focused'>
        <input 
          type="text"
          ref={firstInputRef}
          placeholder="I am focused on reload"
          className="input is-rounded"
        />
        <input
          type="text"
          value={secondInputValue}
          onChange={e => setSecondInputValue(e.target.value)}
          className="input is-rounded"
        />
        <button onClick={handleClick} className="button is-success">Submit</button>
        <ul>
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    );
  };