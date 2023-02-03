import { useState, useEffect } from 'react'

export default function DisabledButton() {
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
        <div className='button--disabled'>
            <button disabled={isDisabled} className="button is-success">5s is disabled</button>
        </div>
    );
};
