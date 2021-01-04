import { useInput } from "../custom-hooks/form-hooks";
import { useCustomers } from "./CustomersProviderHook";

export default function AddCustomerFormComponent({onAddCustomer = f => f}) {
    const [nameProps, resetName] = useInput(""); // usa hook personalizado (value y onChange())
    const [phoneProps, resetPhone] = useInput("");

    const { addCustomer } = useCustomers(); // metodo de contexto

    const submit = event => {
        event.preventDefault();
        // onAddCustomer(nameProps.value);
        const customer = {
                            name: nameProps.value,
                            phone: phoneProps.value
                        }
        addCustomer(customer); 
        resetName();
        resetPhone();
    }

    return (
        <form onSubmit={submit}>
            <input
                {...nameProps}
                type="text"
                placeholder="customer name ..."
                required
            />
            <input
                {...phoneProps}
                type="text"
                placeholder="customer phone ..."
            />
            <button>ADD Customer (controlled component)</button>
        </form>
    );
}