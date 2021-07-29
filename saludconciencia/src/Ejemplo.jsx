import React from 'react';

import { useParams } from 'react-router-dom';

const Ejemplo = () => {
    console.log(useParams())
    return (
        <div>
            {`Año: ${useParams().anio}`}
            {`Mes: ${useParams().mes}`}
            {`Dia: ${useParams().dia}`}
            {`Titulo: ${useParams().titulo}`}
        </div>
    )
}

export default Ejemplo
