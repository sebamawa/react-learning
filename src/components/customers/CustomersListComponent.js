import {React, useState} from "react";
import './CustomersListComponent.css';
import { useCustomers } from "./CustomersProviderHook";

function CustomerComponent({customer, isSelectedCustomer, onRemove = f => f}) {
    const {deleteCustomer} = useCustomers();
    return(
        <>
            <td>
                {customer.id}
            </td> 
            <td>
                {customer.name}
            </td>
            <td> 
                {customer.phone}
            </td>
            <td>
                {/* <button hidden={selectedCustomer===customer ? '' : "hidden"}  */}
                <button type="button" className="btn btn-danger"
                        hidden={isSelectedCustomer ? '' : 'hidden'}
                        // onClick={() => onRemove(customer.id)}> X
                        onClick={() => deleteCustomer(customer.id)}
                > X        
                </button>  
                </td>     
        </>
    );
}

export default function CustomersListComponent({customersList = [],
    // onRemoveCustomer = f => f,
    // onCreateCustomer = f => f}) {
    }){    
    const [selectedListItem, setSelectedListItem] = useState(null);  // estado para seleccionar clase css para el customer clickeado 
    // const customerFromUser = () => {
    //     const name = prompt("Ingrese el nombre del customer:");
    //     if (name) {
    //         const customer = {
    //             id: customersList.length,
    //             name: name
    //         }
    //         return customer;
    //     }
    //     return null;
    // }    
  
    // if (!customersList.length) return <div>No customers Listed. (Add a Customer)</div> 

    // obtengo customers del CustomersProviderHook
    const {customers} = useCustomers();
    return(  
        <> 
        <p hidden={customers.length===0 ? "" : "hidden"}>No customers Listed. (Add a Customer)</p> 
        <table className="table">
            <thead>
            <tr style={{background: "bisque"}}>
                <th>id</th>
                <th>name</th>
                <th>phone</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
    
         {/* <div style={{padding: "5px", background: "#B8F08E"}}> */}
            {/* <p hidden={customersList.length===0 ? "" : "hidden"}>No customers Listed. (Add a Customer)</p>  */}
            {/* <tr className="customers"> */}
                {
                    // customersList.map(customer => (
                        customers.map(customer => (
                        <tr key={customer.id}
                            className={selectedListItem===customer ? 'selected' : ''} 
                            onClick={() => setSelectedListItem(customer)}
                        >
                            <CustomerComponent 
                                customer={customer} 
                                //selectedCustomer={selectedCustomer}
                                //setSelectedCustomer={setSelectedCustomer}
                                // onRemove={onRemoveCustomer}    
                                isSelectedCustomer={customer===selectedListItem}                          
                            >  
                            </CustomerComponent>
                        </tr>  
                    ))
                }
            {/* </tr>  */}
            {/* <button
                onClick={() => onCreateCustomer(customerFromUser())}
            >Add Customer (prompt)</button>      */}
        {/* </div> */}
        </tbody>
        </table>
        </>
    );
       
}





