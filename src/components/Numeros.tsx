"use client"; // This is a client component 👈🏽

import { Fragment } from "react";
import { useState } from "react";

const Numeros = () => {
    const [numero, setNumero] = useState(0);

    return ( 
        <Fragment>
            <h1>Tu número es: {numero}</h1>
            <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
        </Fragment>
    );
}
 
export default Numeros;




