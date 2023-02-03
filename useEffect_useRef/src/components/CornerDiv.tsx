import { useRef, useState } from 'react'

export default function CornerDiv() {
    const ref = useRef<HTMLDivElement>(null);
    const [textVisible, setTextVisible] = useState(false);
    
    const handleClick = () => {
      ref.current!.style.top = "0";
      ref.current!.style.right = "0";
      ref.current!.style.position = "absolute";
      setTextVisible(true);
    };
    
    return (
      <div className='transforming-rectangles'>
        <div ref={ref} className='transforming-div transforming-div--black'>
          {textVisible && <p>Esmu stūrī</p>}
        </div>
        <button onClick={handleClick} className="button is-info is-light">Move to top right</button>
      </div>
      );
};