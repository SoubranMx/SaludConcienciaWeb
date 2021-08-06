import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase'

const Asesorias = (props) => {
    useEffect(()=>{
        if(!auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])
    return (
        <div>
            Asesorias
        </div>
    )
}

export default withRouter(Asesorias)