import { useRef } from 'react'

export default function ColorChangingRectangle() {
    const rectangleRef = useRef<HTMLDivElement>(null);
  
    const handleButtonClick = () => {
      if (rectangleRef.current) {
        rectangleRef.current.style.backgroundColor = 'gold';
      }
    };
  
    return (
      <div className='transforming-rectangles'>
        <button 
          onClick={handleButtonClick}
          className="button is-info is-light">
          Change Color
        </button>
        <div ref={rectangleRef} className='transforming-div' />
      </div>
    );
};
