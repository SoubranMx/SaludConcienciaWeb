import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enviarMensajeAccion } from '../../redux/contactoDucks';
import '../../sass/_contacto.scss'

const Contacto = () => {


    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useDispatch()
    const loading = useSelector(store=>store.contacto.loading)

    const enviarMensaje = (e) => {
        e.preventDefault();
        if(!email.trim()){
            //no escribio email
            setError("Por favor, escriba un email")
            return
        }
        if(!nombre.trim()){
            //no escribio nombre
            setError("Por favor, escriba su nombre")
            return
        }
        if(!msg.trim()){
            //no escribio mensaje
            setError("Por favor, escriba un mensaje")
            return
        }

        //Listo para enviar
        setError(null)
        dispatch(enviarMensajeAccion(nombre, email, msg, Date.now()))
    }

    return (
        <div className="contactoWrapper">
            <form onSubmit={enviarMensaje} className="contactoForm">
                <div className="contactoTitle lexend lexend__semibold">
                    <h1>¿Quieres dejarnos un mensaje?</h1>
                    <h2>¡Te contactamos!</h2>
                </div>
                <div className="contacto__nombre poppins poppins__regular">
                    <span>Nombre: </span>
                    <input 
                        type="text"
                        className="contacto__nombre-input"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="contacto__email poppins poppins__regular">
                    <span>email: </span>
                    <input 
                        type="email"
                        className="contacto__email-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="contacto__mensaje poppins poppins__regular">
                    <span>Mensaje: </span>
                    <textarea 
                        type="text"
                        className="contacto__msg-input"
                        value={msg}
                        onChange={e => setMsg(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-lg btn-block btn-primary"
                    type="submit"
                    disabled={loading}
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Contacto
