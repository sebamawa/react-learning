import {React, useState} from "react";
import './CustomersComponent.css';

function CustomerComponent({customer, isSelectedCustomer, onRemove = f => f}) {
    return(
        <div>
            {customer.id} - {customer.name}
            {/* <button hidden={selectedCustomer===customer ? '' : "hidden"}  */}
            <button 
                    hidden={isSelectedCustomer ? '' : 'hidden'}
                    onClick={() => onRemove(customer.id)}> X
            </button>       
        </div>
    );
}

export default function CustomersListComponent({customersList = [], 
    onRemoveCustomer = f => f,
    onCreateCustomer = f => f}) {
    const [selectedListItem, setSelectedListItem] = useState(null);  // estado para seleccionar clase css para el customer clickeado 
    const customerFromUser = () => {
        const name = prompt("Ingrese el nombre del customer:");
        if (name) {
            const customer = {
                id: customersList.length,
                name: name
            }
            return customer;
        }
        return null;
    }    
  
    // if (!customersList.length) return <div>No customers Listed. (Add a Customer)</div> 
    return(   
        <div style={{padding: "5px", background: "#B8F08E"}}>
            <p hidden={customersList.length===0 ? "" : "hidden"}>No customers Listed. (Add a Customer)</p> 
            <ul className="customers">
                {
                    customersList.map(customer => (
                        <li key={customer.id}
                            className={selectedListItem===customer ? 'selected' : ''} 
                            onClick={() => setSelectedListItem(customer)}
                        >
                            <CustomerComponent 
                                customer={customer} 
                                //selectedCustomer={selectedCustomer}
                                //setSelectedCustomer={setSelectedCustomer}
                                onRemove={onRemoveCustomer}    
                                isSelectedCustomer={customer===selectedListItem}                          
                            >  
                            </CustomerComponent>
                        </li>  
                    ))
                }
            </ul> 
            <button
                onClick={() => onCreateCustomer(customerFromUser())}
            >Add Customer (prompt)</button>     
        </div>
    );
       
}





