// import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import colors from "./mock-data/list-color-data.json";
import ColorProvider from './components/colors/ColorProvider';
import CustomerProviderHook from './components/customers/CustomersProviderHook';

// REACT CONTEXT
// export const ColorContext = createContext(); 

// elemento React con createElement()
// const titulo = React.createElement("h1", null, "Hola munado con React !!!");
// ReactDOM.render(
//   // React.createElement(CustomersList, {customers}, null),
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// USO DE CONTEXTO
ReactDOM.render(
  // Agrego data al context.provider con el atributo value
  // como envuelve toda la <App> la data esta disponible en cualquier componente con context.consumer
  // <ColorContext.Provider value={{colors}}> 
  //   <App />
  // </ColorContext.Provider>,
  
  //paso wraper con estado para el contexto
  <ColorProvider> 
    <CustomerProviderHook>
      <App/> 
    </CustomerProviderHook>
  </ColorProvider> ,
  
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
