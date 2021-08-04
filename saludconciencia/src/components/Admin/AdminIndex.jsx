import React from 'react'
import { withRouter } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logoutAdminAccion } from '../../redux/adminDucks'

const AdminIndex = (props) => {
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(logoutAdminAccion())
        props.history.push('/')
    }

    return (
        <div>
            <div className="update__info">
                <h1 className="update__info-version">Salud Conciencia Version 0.1.2</h1>
                <p>Cambios de la versión</p>
                <ul className="update__info__cambios">
                    <li className="update__info__cambios-item">El editor ahora no muestra duplicados.</li>
                    <li className="update__info__cambios-item">El editor ahora muestra la información guardada al hacer click en editar desde guardados.</li>
                    <li className="update__info__cambios-item">Se añadió la página de Perfil donde se puede cambiar la foto a mostrarse en los blogs. Puede seleccionar archivos desde la PC. Se accede al hacer click al engrane en la barra de admin.</li>
                    <li className="update__info__cambios-item">Ahora no se crean más blogs al editar y guardar un blog guardado previamente.</li>
                    <li className="update__info__cambios-item">Ahora se puede subir imagenes como imagen de portada desde la PC. Por motivos de espacio, el tamaño máximo es de 1MB por imagen, lo cual permitiria en el caso que todas fueran de 1MB, tener 5000 imágenes gratuitas.</li>
                    <li className="update__info__cambios-item">Al eliminar un blog guardado o publicado*, se eliminan las fotos que éste tenia. A futuro, se podrán agregar fotos desde la PC al editor, por lo que éstas también serán borradas al elegir eliminar un blog publicado* o guardado.   *Aun debe testearse.</li>
                    <li className="update__info__cambios-item">Cuando se selecciona publicar a un blog que se ha guardado previamente, éste último se borrará de la sección guardados.</li>
                </ul>
            </div>
            <button className="btn btn-warning mt-3" onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
    )
}

export default withRouter(AdminIndex)
