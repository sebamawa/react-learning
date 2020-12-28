// import React, {useRef} from "react";
import React, {useState} from "react";

export default function AddColorFormComponent({onNewColor = f => f}){
    // const txtTitle = useRef(); // permite referenciar elemento del DOM (codigo imperativo)
    // const hexColor = useRef();
    // usamos estados
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    // const submit = e => {
    //     e.preventDefault();
    //     const title = txtTitle.current.value;
    //     const color = hexColor.current.value;
    //     onNewColor(title, color);
    //     txtTitle.current.value = "";
    //     hexColor.current.value = "";
    // }

    const submit = e => {
        e.preventDefault();
        console.log(title);
        setTitle("")
        setColor("#000000");
    }

    return(
        <form onSubmit={submit}>
            <input 
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text"
                placeholder="color title ..."
                required
            />
            <input
                value={color}
                onChange={event => setColor(event.target.value)}
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