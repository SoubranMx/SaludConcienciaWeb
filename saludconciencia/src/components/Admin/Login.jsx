import React,{useState} from 'react'
import { auth } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginAdminAccion } from '../../redux/adminDucks'
import { useEffect } from 'react'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)

    const dispatch = useDispatch()
    const loading = useSelector(store=> store.admin.loading)
    const activo = useSelector(store=>store.admin.activo)

    useEffect(()=>{
        //console.log(activo)
        if(activo){
            props.history.push('/admin')
        }
    },[activo])

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            //no escribio email
            setError("Ingrese email")
            return
        }
        if(!pass.trim()){
            setError("Ingrese Password")
            return
        }
        //Listo
        setError(null)
        dispatch(loginAdminAccion(email, pass))

    }
    return (
        <div className = "mt-5">
            <h3 className="text-center">Acceso a Admin</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-l-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input 
                            type="email"
                            className="form-control mb-2"
                            placeholder="Email"
                            onChange={e=>{setEmail(e.target.value)}}
                            value={email}
                        />
                        <input 
                            type="password"
                            className="form-control mb-2" 
                            placeholder="Contraseña"
                            onChange={e=>{setPass(e.target.value)}}
                            value={pass}
                        />
                        <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={loading}>
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
