import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const customers = [
//   {id: 1, name: "Alejandro"},
//   {id: 2, name: "Vivian"},
//   {id: 3, name: "Pablo"},
//   {id: 4, name: "Mariela"}
// ] 

// componente funcional que recive un array como props
// function CustomersList(props) {
//   return React.createElement(
//     "ul",
//     { className: "customers" },
//     props.customers.map((customer, index) => React.createElement("li", {key:index}, customer.name)
//     )
//   );
// }

// elemento React con createElement()
// const titulo = React.createElement("h1", null, "Hola munado con React !!!");
ReactDOM.render(
  // React.createElement(CustomersList, {customers}, null),
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
