import {useState} from "react";
/**
 * Hook personalizado que encapsula las propiedades de formularios:
 * 
 * value={title}
 * onChange={event => setTitle(event.target.value)}
 * 
 * Donde title es una variable de estado que corresponde al valor de un <input/> 
 * y setTitle() modifica el estado para esa variable (mediante el hook useState()) 
 * Con esto se logra que el form se un componente controlado (si no se referencia el DOM por otro lado)
 */

 export const useInput = initialValue => {
     const [value, setValue] = useState(initialValue);
     return [
         {value, onChange: e => setValue(e.target.value)}, // este objeto contiene las 2 lineas a encapsular
         () => setValue(initialValue) // para resetear value
     ]
 }


