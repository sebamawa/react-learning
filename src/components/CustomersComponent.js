
export default function CustomersComponent(props) {
    return( 
    <>
        <ul>
            {props.customers.map((customer, i) => (
                <li key={i}>{customer.name}</li>
            ))}
        </ul>
        <button className="square" onClick={() => addCustomer()}>
            Add customer
        </button>
    </>
    );
}

function addCustomer() {
    const name = prompt("Ingrese el nombre: ");
    if (name) {
        const customer = {
            id: 1,
            name: name
        }
    }
}

