import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase'

const Podcast = (props) => {
    useEffect(()=>{
        if(auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])
    return (
        <div>
            Podcast
        </div>
    )
}

export default withRouter(Podcast)