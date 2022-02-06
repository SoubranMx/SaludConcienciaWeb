import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import blogsReducer from './blogsDucks'
import adminReducer, {leerAdminActivoAccion} from './adminDucks';
import contactoReducer from './contactoDucks';
import carouselReducer from './carouselDucks';


const rootReducer = combineReducers({
    blogs: blogsReducer,
    admin: adminReducer,
    contacto: contactoReducer,
    carousel: carouselReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )

    //cargar un admin si esta logeado
    //mandamos a llamar al store dispatch para que pueda mandar dispatch
    //Cada vez que se recarga la pagina, lee primero el store y activa al usuario
    leerAdminActivoAccion()(store.dispatch)
    return store
}