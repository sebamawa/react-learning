import { useCustomers } from './CustomersProviderHook';

export default function FakeComponent() {
    const { customers } = useCustomers();
    console.log(customers);

    return(
        <div>fake component</div>
    );
}