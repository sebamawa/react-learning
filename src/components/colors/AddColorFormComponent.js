// import React, {useRef} from "react";
//import React, {useContext, useState} from "react";
// import React, {useContext} from "react";
import React from "react";
//import { ColorContext } from "../colors/ColorProvider"; // se encapsula contexto en hook
import { useColors } from "../colors/ColorProvider";
import { useInput } from "../custom-hooks/form-hooks";

export default function AddColorFormComponent({onNewColor = f => f}){
    // const txtTitle = useRef(); // permite referenciar elemento del DOM (codigo imperativo)
    // const hexColor = useRef();
    // usamos estados
    //const [title, setTitle] = useState(""); // se usa React.Context
    //const [color, setColor] = useState("#000000");

    // const submit = e => {
    //     e.preventDefault();
    //     const title = txtTitle.current.value;
    //     const color = hexColor.current.value;
    //     onNewColor(title, color);
    //     txtTitle.current.value = "";
    //     hexColor.current.value = "";
    // }

    //const { addColor } = useContext(ColorContext); // se encapsula contexto en hook
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    //let title = ""; // usamos hook de form personalizado con estado 
    //let color = "#000000";

    const submit = e => {
        e.preventDefault();
        // onNewColor(title, color); // en lugar de props usamos React.Context
        // setTitle(""); // codigo imperativo
        // setColor("#000000");
        
        //addColor(title, color); // se llama a funcion de contexto. SE USA HOOK useInput()
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }

    return(
        <form onSubmit={submit}>
            <input 
                //value={title} // al setear el atributo value, pasa a ser un componente controlado y no se puede modificar el valor desde el form (DOM)
                //onChange={event => setTitle(event.target.value)}
                //onChange={event => title = event.target.value}
                {...titleProps} // desestructura en atributos value y enChange()
                type="text"
                placeholder="color title ..."
                required
            />
            <input
                //value={color}
                //onChange={event => setColor(event.target.value)}
                //onChange={event => color = event.target.value}
                {...colorProps}
                type="color"
                required
            />
            <button>ADD Color</button>
        </form>
        // <form onSubmit={submit}>
        //     <input ref={txtTitle} type="text" placeholder="color title ..." required/>
        //     <input ref={hexColor} type="color" required/>
        //     <button>ADD Color</button>
        // </form>
    );
}