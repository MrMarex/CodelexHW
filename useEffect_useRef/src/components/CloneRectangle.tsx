import { useRef } from 'react'

export default function CloneRectangle() {
    const originalRef = useRef<HTMLDivElement>(null);
  
    const handleClick = () => {
      const original = originalRef.current;
      if (original) {
        const clone = original.cloneNode(true);
        original.after(clone);
      }
    };
  
    return (
      <div className='transforming-rectangles'>
        <div ref={originalRef} className='transforming-div transforming-div--red' />
        <button onClick={handleClick} className="button is-info is-light">Clone</button>
      </div>
    );
};