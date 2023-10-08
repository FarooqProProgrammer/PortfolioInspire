import { useState, useContext, useEffect } from 'react';
import { ColorContext } from './useTheme';

export default function useRgb(hex) {
    const { colorValue } = useContext(ColorContext);

    useEffect(() => {
        hex = colorValue.replace(/^#/, '');

        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }

        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        setRgb({ r, g, b });
    }, [colorValue]);

    const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });

    return rgb;
}
