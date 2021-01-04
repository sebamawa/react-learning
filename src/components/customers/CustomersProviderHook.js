/**
 * Componente con estado (custom provider) para envolver al contexto Context.Provider de customers
 */

import React, { createContext, useState, useContext, useEffect } from "react";

// CONTEXTO para almacenar la data de customers
const CustomersContext = createContext();

const urlBaseCustomers = "http://localhost:3000/customers"; // base url for api requests

export default function CustomersProvider({ children }) {

    const [customers, setCustomers] = useState();

    
    // para hacer el http request get de customers
    useEffect(() => {
        fetch(urlBaseCustomers)
            .then(response => response.json())
            .then(setCustomers)
            .catch(console.error);
        
    }, [children]);

    // http post
    const addCustomer = async customer => {
        try {
            const response = await fetch(urlBaseCustomers, 
                {
                    method: "POST",
                    body: JSON.stringify(customer),
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            );
            const customerData = await response.json();
            // console.log(customerData);
            setCustomers([...customers, customerData]); // agrego el customer nuevo sin hacer un GET
        } catch(error) {
            console.log(error);
        }
    }

    const deleteCustomer = async id => {
        const url = `${urlBaseCustomers}/${id}`;
        console.log(url);
        try {
            const response = await fetch(url, 
                {
                    method: "DELETE",
                    // body: JSON.stringify(),
                     headers: {
                         'Content-Type': 'application/json'
                         // 'Content-Type': 'application/x-www-form-urlencoded',
                     }
                }
            );
            // const customerData = await response.json();
            // console.log(customerData);
            const customersMinusOne = customers.filter(customer => customer.id != id);
            setCustomers(customersMinusOne); // agrego el customer nuevo sin hacer un GET
        } catch(error) {
            console.log(error);
        }        

    }

    // if (!customers) return null;
    if (!customers) return <h1>Loading</h1>;
    return (
        // proveedor de contexto (se agregan los colores del estado al contexto)
        <CustomersContext.Provider value={{customers, addCustomer, deleteCustomer}}>
            {children}
        </CustomersContext.Provider>
    );
}

//const ColorContext = createContext();
// hook que encapsula el contexto con la data de los colores y estado
export const useCustomers = () => useContext(CustomersContext); // retorna objeto con el contexto