import { useState } from 'react'

export default function ColoredBoxes () {
    const [selectedColor, setSelectedColor] = useState("");
    const [rectangles, setRectangles] = useState<string[]>([]);
  
    const handleClick = () => {
      setRectangles([...rectangles, selectedColor]);
    };
  
    return (
      <div className="container container--colored">
        <div className="color-selectors">
          <button onClick={handleClick} className="button is-warning">+</button>
          <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
            <option value="" disabled>Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="aquamarine">Aquamarine</option>
          </select>
        </div>
        <div className="rectangle-container">
          {rectangles.map((color, index) => (
            <div key={index} className="rectangle rectangle--colored" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    );
};
