import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase'

const ParaTi = (props) => {
    useEffect(()=>{
        if(auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])
    
    return (
        <div>
            Para ti
        </div>
    )
}

export default withRouter(ParaTi)
