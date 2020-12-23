import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

// componente Star
// se le debe pasar una funcion a onSelected
const StarComponent = ({selected = false, onSelected = f => f}) => (
    <FaStar color = {selected ? "red" : "grey"} onClick={onSelected} />
);

// crea un array de largo length
const createArray = length => [...Array(length)];

export default function StartRatingComponent({totalStars = 5}) {
    // useState return an array. El primer elemento es la variable de estado y el
    // segundo una funcion para cambiar el valor de dicha variable.
    const [selectedStars, setSelectedStars] = useState(0); // setSelectedStars setea el valor de selectedStars
    return (
        <>
            {createArray(totalStars).map((n,i) => (
                <StarComponent 
                    key={i} 
                    selected={selectedStars>i}
                    onSelected={() => setSelectedStars(i+1)} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}    