import logo from './logo.svg';
import homero from './assets/homero.jpg';
import './App.css';
import CustomersComponent from  './components/CustomersComponent';

// import React from 'react';
// import ReactDOM from 'react-dom';

const customers = [
  {id: 1, name: "Alejandro"},
  {id: 2, name: "Vivian"},
  {id: 3, name: "Pablo"},
  {id: 4, name: "Mariela"}
] 

function App() {
  return (
    <>
      <h1>Lista de customers</h1>
      <CustomersComponent customers={customers}></CustomersComponent>
    </>
  );
}

export default App;
