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
            <h1>Salud Conciencia Version 0.1.0</h1>
            <button className="btn btn-warning mt-3" onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
    )
}

export default withRouter(AdminIndex)
