import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase'

const Inicio = (props) => {
    useEffect(()=>{
        if(!auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])
    
    return (
        <div>
            Inicio
        </div>
    )
}

export default withRouter(Inicio)
