import React from "react";
import StartRatingComponent from "./StarRatingComponent";
import { FaTrash } from "react-icons/fa";

function Color({
    id, 
    title, 
    color, 
    rating, 
    onRemove = f => f,
    onRate = f => f}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 40, backgroundColor: color}}></div>
            <StartRatingComponent 
                selectedStars={rating}
                onRate={rating => onRate(id, rating)}
            />
        </section>
    );
}

export default function ColorListComponent({
    colors_list = [], 
    onRemoveColor = f => f,
    onRateColor = f => f}) {
    if (!colors_list.length) return <div>No Colors Listed. (Add a Color)</div>;
    return (
        <div>
            <h2>Lista de colores</h2>
            {
                colors_list.map(color => 
                    <Color 
                        key={color.id} 
                        {...color} 
                        onRemove={onRemoveColor}
                        onRate={onRateColor}/>)
            }
        </div>
    );
}