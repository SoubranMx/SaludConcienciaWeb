import React, {useState, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enviarMensajeAccion, resetMensajeAccion } from '../../redux/contactoDucks';
import '../../sass/_contacto.scss'

const Contacto = () => {

    const topContacto = useRef(null)

    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(null);
    const [cargado, setCargado] = useState(false)

    const dispatch = useDispatch()
    const loading = useSelector(store=>store.contacto.loading)
    const enviado = useSelector(store => store.contacto.enviado)

    useEffect(()=> {
        const reset = () => {
            console.log("Reset useEffect")
            setEmail('')
            setNombre('')
            setTelefono('')
            setMsg('')
            setError(null)
            dispatch(resetMensajeAccion())
        }
        enviado === true && reset()
    }, [enviado])

    useEffect(()=>{
        setCargado(true)
    },[])
    useEffect(()=>{
        const scrollTop = () => {
            topContacto.current.scrollIntoView({block: 'end'})
        }
        cargado === true && scrollTop()
    },[cargado])

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
        if(!telefono.trim()){
            //no escribio nombre
            setError("Por favor, escriba un telefono de contacto")
            return
        }
        if(!msg.trim()){
            //no escribio mensaje
            setError("Por favor, escriba un mensaje")
            return
        }

        //Listo para enviar
        setError(null)
        console.log("Nombre => ", nombre)
        console.log("email => ", email)
        console.log("telefono => ", telefono)
        console.log("msg => ", msg)
        dispatch(enviarMensajeAccion(nombre, email, telefono, msg, Date.now()))
    }

    return (
        <div className="contactoWrapper" ref={topContacto} >
            <form onSubmit={enviarMensaje} className="contactoForm">
                <div className="contactoTitle lexend lexend__semibold">
                    <h1>¿Quieres dejarnos un mensaje?</h1>
                    <h2>¡Te contactamos!</h2>
                </div>
                <br />
                {
                    error !== null && (
                    <div className="contactoErrorMsg">
                        {error}
                    </div>
                    )
                }
                <div className="contactoBox">
                    <div className="contacto__nombre poppins poppins__regular">
                        <span>Nombre: </span>
                        <input 
                            type="text"
                            className="contacto__nombre-input"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            placeholder="Nombre Apellido"
                            required
                        />
                    </div>
                    <div className="contacto__email poppins poppins__regular">
                        <span>Email: </span>
                        <input 
                            type="email"
                            className="contacto__email-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="contacto@ejemplo.com"
                            required
                        />
                    </div>
                    <div className="contacto__email poppins poppins__regular">
                        <span>Telefono: </span>
                        <input 
                            type="tel"
                            className="contacto__email-input"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                            placeholder="55 1234 5678"
                            required
                        />
                    </div>
                    <div className="contacto__mensaje poppins poppins__regular">
                        <span>Mensaje: </span>
                        <textarea 
                            type="text"
                            className="contacto__msg-input"
                            value={msg}
                            onChange={e => setMsg(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button
                    className="btn btn-lg btn-block btn-primary btn__contacto"
                    type="submit"
                    disabled={loading}
                >
                    {
                        loading === true ? (
                            <>
                            <span className="spinner-border spinner-border-sm mr-2" role="status"></span>
                            &nbsp;Enviando...
                            </>
                        ) : (
                            <span>
                                Enviar
                            </span>
                        )
                    }
                </button>
            </form>
        </div>
    )
}

export default Contacto
