import React, { useContext, useEffect, useState } from 'react'
import { ColorContext } from '../../Hooks/useTheme'
import "./index.css"
import { AiOutlinePlus } from 'react-icons/ai';

export default function CounterAnimation({ endValue, duration }) {

    const { colorValue } = useContext(ColorContext)
    const [count, setCount] = useState(0);

    useEffect(() => {
        let frame;
        let startTime;
        const increment = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min(1, (timestamp - startTime) / duration);
            setCount(Math.floor(progress * endValue));

            if (progress < 1) {
                frame = requestAnimationFrame(increment);
            }
        };

        frame = requestAnimationFrame(increment);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [endValue, duration]);

    return (
        <div className="custom-counter">
            <AiOutlinePlus />
            <span style={{ color: colorValue }} className="text-4xl font-bold">{count}</span>
        </div>
    )
}
