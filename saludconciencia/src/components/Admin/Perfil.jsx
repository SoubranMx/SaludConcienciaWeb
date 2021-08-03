import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editarFotoPerfilAccion } from '../../redux/adminDucks'

const Perfil = () => {
    const adminProfile = useSelector(store=>store.admin.user)
    const loading = useSelector(store=>store.admin.loading)
    const dispatch = useDispatch()
    
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const seleccionarArchivo = imagen => {
        const imagenCliente = imagen.target.files[0]
        console.log(imagenCliente)
        if(imagenCliente === undefined){
            setErrorMsg("No se seleccionó una imagen")
            setError(true)
            return
        }
        if(imagenCliente.type === "image/png" || imagenCliente.type === "image/jpg" || imagenCliente.type === "image/jpeg"){
            dispatch(editarFotoPerfilAccion(imagen.target.files[0]))
            setError(false)
        }else{
            setErrorMsg("Solo archivos .png o .jpg")
            setError(true)
        }
    }
    
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h2>PERFIL USUARIO</h2>
                <div className="card">
                    <div className="card-body">
                        <img src={adminProfile.photoUrl} alt="" width="100px" height="100px" className="mb-3 rounded-circle"/>
                        <h5 className="card-title">Nombre: {adminProfile.displayName}</h5>
                        <p className="card-text">Email: {adminProfile.email}</p>
                        {
                            error &&
                            <div className="alert alert-warning mt-3">
                                {errorMsg}
                            </div>
                        }
                        <div className="mt-3">
                            <input 
                                type="file"
                                className="form-control"
                                id="inputGroupFile01"
                                style={{display: 'none'}}
                                onChange={e=>seleccionarArchivo(e)}
                                disabled={loading}
                            />
                            <label 
                                htmlFor="inputGroupFile01" 
                                className={loading ? 'btn btn-dark disabled' : 'btn btn-dark'}
                            >
                                Actualizar Imagen
                            </label>
                        </div>
                    </div>
                    {
                        loading &&
                        <div className="card-body">
                            <div className="d-flex justify-content-center my-3">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Cargando...</span>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Perfil
