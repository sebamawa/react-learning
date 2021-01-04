import React from "react";
import ColorListComponent from "./components/colors/ColorListComponent";
import AddColorFormComponent from "./components/colors/AddColorFormComponent";
import CustomersListComponent from "./components/customers/CustomersListComponent";
import FakeComponent from "./components/customers/FakeComponent";
import AddCustomerFormComponent from "./components/customers/AddCustomerFormComponent";

export default function App() {
    return (
        <>
            <div>
                {/* <FakeComponent /> */}
                <CustomersListComponent />
                <AddCustomerFormComponent />
            </div> 
            <hr/>
            <div>
                {/* <AddColorFormComponent />
                <ColorListComponent /> */}
            </div>
        </>
    );
}