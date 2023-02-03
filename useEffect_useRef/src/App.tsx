import { useState, useRef, useEffect } from 'react'
import './App.css'

const InputField = () => {
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
    <div>
      <input type="text" ref={firstInputRef} placeholder="I am focused on reload"/>
      <input type="text" value={secondInputValue} onChange={e => setSecondInputValue(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

const DisabledButton = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <button disabled={isDisabled}>Save</button>
    </div>
  );
};

const CounterSet = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)}>Click me ({count})</button>
      <div className="double-counter">{count * 2}</div>
    </div>
  );
};

const ColoredBoxes = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [rectangles, setRectangles] = useState<string[]>([]);

  const handleClick = () => {
    setRectangles([...rectangles, selectedColor]);
  };

  return (
    <div className="container">
      <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
        <option value="" disabled>Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="aquamarine">Aquamarine</option>
      </select>
      <button onClick={handleClick}>+</button>
      <div className="rectangle-container">
        {rectangles.map((color, index) => (
          <div key={index} className="rectangle rectangle--colored" style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  );
};

const InputForm = () => {
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
      <button onClick={handleClick}>+</button>
      <div className="count">Count: {count}</div>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <div className="text">{inputValue}</div>
    </div>
  );
};

const InputForm2 = () => {
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
      <button onClick={handleClick}>+</button>
      <div className="count" style={{ fontSize: textSize }}>Count: {count}</div>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <div className="text">{inputValue}</div>
    </div>
  );
};

const ColorChangingRectangle = () => {
  const rectangleRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (rectangleRef.current) {
      rectangleRef.current.style.backgroundColor = 'gold';
    }
  };

  return (
    <div>
      <div ref={rectangleRef} style={{ width: 100, height: 100, backgroundColor: 'gray' }} />
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
};


const CloneRectangle = () => {
  const originalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const original = originalRef.current;
    if (original) {
      const clone = original.cloneNode(true) as HTMLDivElement;
      original.after(clone);
    }
  };

  return (
    <div>
      <div ref={originalRef} style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
      <button onClick={handleClick}>Clone</button>
    </div>
  );
};

const CornerDiv = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  
  const handleClick = () => {
    ref.current!.style.top = "0";
    ref.current!.style.right = "0";
    ref.current!.style.position = "absolute";
    setTextVisible(true);
  };
  
  return (
    <div>
      <div ref={ref} style={{ backgroundColor: "black", height: "100px", width: "100px", color: 'white' }}>
        {textVisible && <p>Esmu stūrī</p>}
      </div>
      <button onClick={handleClick}>Move to top right</button>
    </div>
    );
  };

function App() {

  return (
    <div className="App">
      <InputField />
      <DisabledButton />
      <CounterSet />
      <ColoredBoxes />
      <InputForm />
      <InputForm2 />
      <ColorChangingRectangle />
      <CloneRectangle />
      <CornerDiv />
    </div>
  )
}

export default App
