import  { createContext, useState } from 'react'

export const ColorContext = createContext();



export const  ColorProvider =({ children }) => {
    const [colorValue, setColorValue] = useState('#EAB308');

    const ChangeColor = (item) => {
        setColorValue(item)
    }


    return (
        <ColorContext.Provider value={{ ChangeColor, colorValue }}>
            {children}
        </ColorContext.Provider>
    )
}
