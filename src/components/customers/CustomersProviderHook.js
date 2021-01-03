/**
 * Componente con estado (custom provider) para envolver al contexto Context.Provider de customers
 */

import React, { createContext, useState, useContext, useEffect } from "react";

// CONTEXTO para almacenar la data de customers
const CustomersContext = createContext();

const urlBaseCustomers = "http://localhost:3000/customers"; // base url for api requests

export default function CustomersProvider({ children }) {

    const [customers, setCustomers] = useState();

    useEffect(() => {
        console.log("use effect");
        // if (!customers) return;

        fetch(urlBaseCustomers)
            .then(response => response.json())
            .then(setCustomers)
            .catch(console.error);
        
    }, [children]);

    // // http get
    // const getCustomers = async () => {
    //     console.log("Llamada de getcustomers()");
    //     try {
    //         const response = await fetch(urlBaseCustomers);
    //         customersData = await response.json();
    //         console.log(customersData);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    //const customersData = getCustomers();
    //console.log(cur);

    //const [customers, setCustomers] = useState(getCustomers());

    // const addColor = (title, color) => 
    //     setColors([
    //         ...colors,
    //         {
    //             id: v4(),
    //             rating: 0,
    //             title,
    //             color,
    //         }
    //     ]);
   
    //     const rateColor = (id, rating) =>
    //         setColors(
    //             colors.map(color => color.id === id ? {...color, rating} : color)
    //         );

    //     const removeColor = id => setColors(colors.filter(color => color.id !== id));

    if (!customers) return null;
    return (
        // proveedor de contexto (se agregan los colores del estado al contexto)
        <CustomersContext.Provider value={{customers}}>
            {children}
        </CustomersContext.Provider>
    );
}

//const ColorContext = createContext();
// hook que encapsula el contexto con la data de los colores y estado
export const useCustomers = () => useContext(CustomersContext); // retorna objeto con el contexto