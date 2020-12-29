import { useInput } from "../custom-hooks/form-hooks";

export default function AddCustomerFormComponent({onAddCustomer = f => f}) {
    const [nameProps, resetName] = useInput(""); // usa hook personalizado

    const submit = event => {
        event.preventDefault();
        onAddCustomer(nameProps.value);
        resetName();
    }

    return (
        <form onSubmit={submit}>
            <input
                {...nameProps}
                type="text"
                placeholder="customer name ..."
                required
            />
            <button>ADD Customer (controlled component)</button>
        </form>
    );
}