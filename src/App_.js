// import logo from './logo.svg';
// import homero from './assets/homero.jpg';
import './App.css';
import CustomersListComponent from  './components/customers/CustomersListComponent';
import customers_json from './mock-data/customers.json';
import AddCustomerFormComponent from "./components/customers/AddCustomerFormComponent";
// import StarRatingComponent from './components/StarRatingComponent';

import colors_json from "./mock-data/list-color-data.json";
import ColorListComponent from "./components/colors/ColorListComponent";
import AddColorFormComponent from "./components/colors/AddColorFormComponent";
import { useState } from 'react';
import {v4} from "uuid"; // genera id unico

// import React from 'react';
// import ReactDOM from 'react-dom';

function App() {
  const customers = customers_json; // lista de customers inicial
  // const color_list = colores_json; // lista de colores inicial

  // estado en el componente root para la lista de customers
  const [customersList, setCustomersList] = useState(customers);

  // estado para la lista de colores
  // el evento para remover un color "sube" por el arbol de compnentes desde el componente ColorrrrrrComponent
  const [colors_list, setColorlist] = useState(colors_json); 
  return (
    <>
      <h1>Lista de customers</h1>
      <CustomersListComponent 
        customersList={customersList} // se pasa estado (lista de customers) como prop
        onRemoveCustomer={id => {
          // console.log("Se ejecuto onRemoveCustomer(). Id = " + id.toString());
          const ok = window.confirm(`Esta seguro que quiere eliminar el customer con id = ${id}`);
          if (ok) {
            const newCustomersList = customersList.filter(customer => customer.id !== id);
            setCustomersList(newCustomersList);
          }
        }}
        onCreateCustomer={customer => {
          if (customer !== null) {
            const newCustomerList = [...customersList, customer];
            setCustomersList(newCustomerList);
          }  
        }} 
      />
      <AddCustomerFormComponent
        onAddCustomer={name => {
          const newCustomersList = [
            ...customersList,
            {
              id: customersList.length,
              name
            }
          ];
          setCustomersList(newCustomersList);
        }}
      />

      {/* <StarRatingComponent 
        style={{backgroundColor:"lightblue"}} 
        totalStars={5}
        onDoubleClick = {e => alert("double click")} 
      /> */}

      <ColorListComponent 
        colors_list={colors_list}
        onRateColor={(id, rating) => {
          const newColorsList = colors_list.map(color =>
            color.id === id ? {...color, rating} : color
            );
            setColorlist(newColorsList);
        }}
        onRemoveColor={id  => {
          const newColorsList = colors_list.filter(color => color.id !== id);
          setColorlist(newColorsList);
        }}
      /> 

      <AddColorFormComponent
        onNewColor = {(title, color) => {
          const newColors = [
            ...colors_list,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          setColorlist(newColors);
        }}
      />
    </>
  );
}

export default App;
