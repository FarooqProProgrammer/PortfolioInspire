import React, { createContext, useState } from 'react'

export const ColorContext = createContext();



export const  ColorProvider =({ children }) => {
    const [colorValue, setColorValue] = useState('yellow-500');

    const ChangeColor = (item) => {
        setColorValue(item)
    }


    return (
        <ColorContext.Provider value={{ ChangeColor, colorValue }}>
            {children}
        </ColorContext.Provider>
    )
}
