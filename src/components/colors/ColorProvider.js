/**
 * Componente con estado (custom provider) para envolver al contexto Context.Provider 
 */

import React, { createContext, useState, useContext } from "react";
import colors_json from "../../mock-data/list-color-data.json";
import { v4 } from "uuid"; // genera id unico

// CONTEXTO para almacenar la data de colores
// export const ColorContext = createContext();
const ColorContext = createContext();

// NO se le pasa al contexto setColors, si no, solo las funciones necesarias
// para manipular el array de colors (add, remove, etc)
export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colors_json);

    const addColor = (title, color) => 
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color,
            }
        ]);
   
        const rateColor = (id, rating) =>
            setColors(
                colors.map(color => color.id === id ? {...color, rating} : color)
            );

        const removeColor = id => setColors(colors.filter(color => color.id !== id));
    return (
        // proveedor de contexto (se agregan los colores del estado al contexto)
        <ColorContext.Provider value={{colors, addColor, rateColor, removeColor}}>
            {children}
        </ColorContext.Provider>
    );
}

//const ColorContext = createContext();
// hook que encapsula el contexto con la data de los colores y estado
export const useColors = () => useContext(ColorContext); // retorna objeto con el contexto


