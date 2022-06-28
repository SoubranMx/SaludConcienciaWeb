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
                <h1 className="update__info-version">Salud Conciencia Version 1.2.1</h1>
                <br />
                <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseSix">
                            Version 1.2.1
                        </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cambios de la versión</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">Se agregó funcionalidad extra a crear autores.</li>
                                    <li className="update__info__cambios-item">Los autores ahora pueden ser modificados, se añadió un botón editar.</li>
                                    <li className="update__info__cambios-item">Por defecto, el autor Julián no podrá ser modificado en autores. Tendría que hacerlo en su propio "perfil" (en el engrane)</li>
                                    <li className="update__info__cambios-item">Se añaden 3 redes sociales opcionales: facebook, twitter e instagram. Son links a cada perfil.</li>
                                    <li className="update__info__cambios-item">Dependiendo de las redes que tenga un autor, se mostrarán en el Blog en forma de íconos de la red social que tienen asignado.</li>
                                </ul>
                                <br />
                                <p>Bugs:</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">En ocasiones, el apartado de Crear Blog no mostrará al autor por defecto (Julián). Si se desea quitarlo para poner otro autor o autores, basta con recargar la página para que aparezca.</li>
                                    <li className="update__info__cambios-item">Una vez que se publica un blog, los autores desaparecen en el apartado de Crear Blog. Recargar la página soluciona el error.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSix">
                            Version 1.2.0
                        </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cambios de la versión</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">Se agregó compatibilidad con múltiples autores.</li>
                                    <li className="update__info__cambios-item">El administrador puede dar de alta distintos autores en la sección autores (con nombre, foto y email)</li>
                                    <li className="update__info__cambios-item">Estos autores serán seleccionables al momento de escribir un Blog.</li>
                                    <li className="update__info__cambios-item">Los autores seleccionados aparecen con un borde verde. Por defecto está seleccionado el administrador (Julián Uriarte)</li>
                                    <li className="update__info__cambios-item">Se seleccionan autores simplemente dando clic encima de la tarjeta del autor. Del mismo modo, si se da clic a un autor seleccionado, este se deseleccionará.</li>
                                    <li className="update__info__cambios-item">Es posible que haya problemas si no hay autores seleccionados. Se resolverá en un futuro. Por tanto, cuidar que siempre haya por lo menos uno seleccionado.</li>
                                    <li className="update__info__cambios-item">Estos cambios se ven reflejados en el blog. Se cambiaron los estilos para dar cábida a más autores.</li>
                                    <li className="update__info__cambios-item">Se cambió el tamaño del Carrusel de la página inicial.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                            Version 1.1.0
                        </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cambios de la versión</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">Se agregó el componente de Carrusel.</li>
                                    <li className="update__info__cambios-item">El carrusel es visto en el inicio de la página y en la sección correspondiente en admin.</li>
                                    <li className="update__info__cambios-item">En admin, pueden subirse imágenes desde la computadora y eliminar cualquiera seleccionada. Este cambio afecta tanto a la página de inicio como la de admin.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            Version 0.9.0
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cambios de la versión</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">Se hizo un cambio en el navbar: se sustituye podcast por contacto.</li>
                                    <li className="update__info__cambios-item">La página de Para Ti ya está completa conforme a los diseños pedidos.</li>
                                    <li className="update__info__cambios-item">Ahora se puede dejar mensajes en la página a través de Contacto. En realidad, se mandan muy rápido pero le he dado un retardo de 2 segundos para que tenga un poco de animación y las personas no se confundan si lo han mandado o no. Falta una animación de término para terminar de explicar que se ha mandado.</li>
                                    <li className="update__info__cambios-item">Los mensajes que se dejan en Contacto ahora aparecen en la sección de Admin. Se sustituyó Crear Podcast, por mensajes. Aparecen por fecha. Por el momento, no son cambios en tiempo real, tendría que estar actualizando la página de vez en cuando.</li>
                                    <li className="update__info__cambios-item">Se añadieron finalmente los links a las distintas redes sociales, tanto en inicio, en el navbar y en el footer.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Version 0.7.1
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cambios de la versión</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">Página de inicio se muestra adecuadamente en distintos dispositivos móviles.</li>
                                    <li className="update__info__cambios-item">Corregido un error que hacia demasiadas peticiones al servidor, agotando las lecturas de ese día.</li>
                                    <li className="update__info__cambios-item">Se añadieron botones para compartir contenido en redes sociales.</li>
                                    <li className="update__info__cambios-item">Tanto Facebook, como Twitter y WhatsApp cargan una imágen estática desde el servidor cuando se comparte un blog o cualquier página del dominio.</li>
                                    <li className="update__info__cambios-item">Se añadió correctamente un footer para cada página. Faltan links asociados. También escala correctamente con distintos tamaños de pantalla.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Version 0.5.1
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cambios de la versión</p>
                                <ul className="update__info__cambios">
                                    <li className="update__info__cambios-item">Corregido un error al cargar los blogs y mostrarlos. Ahora no se quedan con el blog anteriormente visto.</li>
                                    <li className="update__info__cambios-item">Hay un problema con guardar blogs y luego publicarlos. Por el momento, para que puedan encontrarlos debe publicarse uno nuevo cada vez. Es decir, que no venga de guardados. Se solucionará a la brevedad.</li>
                                    <li className="update__info__cambios-item">Se muestra ahora correctamente el estado del blog. Al darle click a un blog, se mostrará un estado de carga momentaneo. De encontrarse el blog, se muestra el blog. De no encontrarse, se muestra un mensaje "no se encontró el blog :c".</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Version 0.5.0
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
