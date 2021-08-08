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
                <h1 className="update__info-version">Salud Conciencia Version 0.5.0</h1>
                <div class="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Version 0.5.0
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cambios de la versión</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">Los blogs al ser publicados ahora crean un link entre sus componentes para ser leido por la seccion blogs</li>
                                    <li className="update__info__cambios-item">Los blogs ahora tienen un link que los redirecciona a mostrar el blog seleccionado</li>
                                    <li className="update__info__cambios-item">Se agregaron algunos estilos para que el usuario sepa en donde esta posicionado su cursor. Cambian de transparencia o color cuando el cursor pasa encima.</li>
                                    <li className="update__info__cambios-item">Se cambiaron los colores de los tags dentro del blog mostrado a verde.</li>
                                    <li className="update__info__cambios-item">Los tags ahora no ocupan todo el espacio de la imagen en las cards, por lo que es posible clickear en la imagen para ir al blog.</li>
                                    <li className="update__info__cambios-item">La imagen de portada ahora esta un poco más centrada al mostrar el blog.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Version 0.1.2
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
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
                        </div>
                    </div>
                    {/*  */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <button className="btn btn-warning mt-3" onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
    )
}

export default withRouter(AdminIndex)
