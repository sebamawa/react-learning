import logo from './logo.svg';
import homero from './assets/homero.jpg';
import './App.css';
import CustomersComponent from  './components/CustomersComponent';
import customers_json from './mock-data/customers.json';
import StarRatingComponent from './components/StarRatingComponent';

// import React from 'react';
// import ReactDOM from 'react-dom';

const customers = customers_json; 

function App() {
  return (
    <>
      <h1>Lista de customers</h1>
      <CustomersComponent customers={customers}></CustomersComponent>

      <StarRatingComponent totalStars={5}></StarRatingComponent>
    </>
  );
}

export default App;
