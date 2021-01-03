//import React, { useContext } from "react";
import React from "react";
// import { ColorContext } from "../../index";
// import { ColorContext } from "../colors/ColorProvider"; // se encapsula el contexto con estadoen un hook
import { useColors } from "../colors/ColorProvider";

import StartRatingComponent from "../StarRatingComponent";
import { FaTrash } from "react-icons/fa"

// import { ColorProvider } from "../../components/colors/ColorProvider";

function Color({
    id, 
    title, 
    color, 
    rating, 
    // onRemove = f => f, // se usa contexto
    // onRate = f => f
    }) {
    // const { removeColor } = useContext(ColorContext); se encapsula contexto en hook
    const { removeColor, rateColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            {/* <button onClick={() => onRemove(id)}> // se usa contexto */}
            <button onClick={() => removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 40, backgroundColor: color}}></div>
            <StartRatingComponent 
                selectedStars={rating}
                //onRate={rating => onRate(id, rating)} // se usa contexto
                onRate={rating => rateColor(id, rating)}
            />
        </section>
    );
}

// OBTENIENDO DATA DEL CONTEXTO CON HOOK USECONTEXT (ya no se obtiene del padre <App>)
export default function ColorListComponent() {
    // const { colors } = useContext(ColorContext); // se encapsula contexto en hook
    const { colors } = useColors();
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    return (
        <div className="color-list">
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    );
}


// export default function ColorListComponent({
//     colors_list = [], 
//     onRemoveColor = f => f,
//     onRateColor = f => f}) {
//     if (!colors_list.length) return <div>No Colors Listed. (Add a Color)</div>;
//     return (
//         <div>
//             <h2>Lista de colores</h2>
//             {
//                 colors_list.map(color => 
//                     <Color 
//                         key={color.id} 
//                         {...color} 
//                         onRemove={onRemoveColor}
//                         onRate={onRateColor}/>)
//             }
//         </div>
//     );
// }