import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { agregarAutoresAccion, eliminarAutorAccion, leerAutoresEditablesAccion, reloadAuthorPage, updateAuthorImgAccion, updateAuthorNameAccion, updateAuthorRRSS, uploadImgAutorAccion } from '../../redux/autoresDucks'
import { nanoid } from 'nanoid'

import "../../sass/_createUser.scss"

const CreateUser = () => {
  const dispatch = useDispatch()
  const autoresAMostrar = useSelector(store => store.autores.autoresExistentes)
  const loading = useSelector(store => store.autores.loading)
  const uploading = useSelector(store => store.autores.uploading)
  const reload = useSelector(store => store.autores.reload)

  const [newUserName, setNewUserName] = useState("")
  const [newUserEmail, setNewUserEmail] = useState("")
  const [newUserPhoto, setNewUserPhoto] = useState("")
  const [newUserPhotoPreview, setNewUserPhotoPreview] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [okMsg, setOkMsg] = useState("")
  const [modoEdicion, setModoEdicion] = useState(false)
  const [newRRSS, setNewRRSS] = useState({instagram:{link:''}, facebook:{link:''}, twitter:{link:''}})

  useEffect(()=>{
    const cargarAutores = () => {
      dispatch(leerAutoresEditablesAccion())
    }
    if (autoresAMostrar.length === 0){
      cargarAutores()
    }
  }, [autoresAMostrar])

  useEffect(()=>{
    if(reload === true){
      dispatch(leerAutoresEditablesAccion())
    }
  }, [reload])

  const submitHandler = (e) => {
    e.preventDefault()

    if(newUserPhoto === undefined || newUserPhoto === ""){
      setErrorMsg("No se seleccionó una imagen")
      return
    }
    if(newUserEmail === undefined || newUserEmail === ""){
      setErrorMsg("No se escribió un email")
      return
    }
    if(newUserName === undefined || newUserName === ""){
      setErrorMsg("No se escribió un nombre")
      return
    }

    if(newUserPhoto.size <= 1000000){
      if(newUserPhoto.type === "image/png" || newUserPhoto.type === "image/jpg" || newUserPhoto.type === "image/jpeg"){
        dispatch(agregarAutoresAccion(newUserEmail, newUserName, newUserPhoto, newRRSS))
        //dispatch(uploadImgAutorAccion(newUserEmail, newUserPhoto))
        setOkMsg("Autor subido correctamente")
        setErrorMsg("")
        setTimeout(()=>{
          dispatch(reloadAuthorPage())
          setOkMsg("")
          setNewUserEmail("")
          setNewUserName("")
          setNewUserPhoto("")
          setNewUserPhotoPreview("")
          setNewRRSS({instagram:{link:''}, facebook:{link:''}, twitter:{link:''}})
        },2000)
      }else{
        setErrorMsg("Solo archivos .png o .jpg")
      }
    }else{
      setErrorMsg("Solo imagenes menores a 1MB")
    }
  }

  const submitUpdateHandler = (e) => {
    e.preventDefault()
    if(newUserPhoto === undefined || newUserPhoto === ""){
      setErrorMsg("No se seleccionó una imagen")
      return
    }
    if(newUserEmail === undefined || newUserEmail === ""){
      setErrorMsg("No se escribió un email")
      return
    }
    if(newUserName === undefined || newUserName === ""){
      setErrorMsg("No se escribió un nombre")
      return
    }

    let authorUpdate = autoresAMostrar.find(autor => autor.email === newUserEmail)
    //No se actualizó imagen (solo actualizaron nombre o rrss)
    if(newUserPhoto === false){
      if(authorUpdate.name !== newUserName){
        console.log("Actualiza solo nombre => ", newUserName)
        dispatch(updateAuthorNameAccion(newUserEmail, newUserName))
      }

      if(authorUpdate.redes !== newRRSS){
        console.log('Cambiamos redes')
        dispatch(updateAuthorRRSS(newUserEmail, newRRSS))
      }

      

    }
    //Se quiere actualizar por lo menos la imagen
    else{
      if(authorUpdate.name !== newUserName){
        console.log("Actualiza nombre => ", newUserName)
      }
      if(newUserPhoto.size <= 1000000){
        if(newUserPhoto.type === "image/png" || newUserPhoto.type === "image/jpg" || newUserPhoto.type === "image/jpeg"){
          console.log("Actualizar imagen ok!")
          dispatch(updateAuthorImgAccion(newUserEmail, newUserPhoto))
        }else{
          setErrorMsg("Solo archivos .png o .jpg")
        }
      }
      else{
        setErrorMsg('Solo imágenes menores a 1MB')
      }
    }

    setOkMsg("Autor actualizado correctamente")
    setErrorMsg("")
    setTimeout(()=>{
      setOkMsg("")
      setErrorMsg("")
      setNewUserEmail("")
      setNewUserName("")
      setNewUserPhoto("")
      setNewUserPhotoPreview("")
      setNewRRSS({instagram:{link:''}, facebook:{link:''}, twitter:{link:''}})
      setModoEdicion(false)
      dispatch(reloadAuthorPage())
    },2000)

  }

  const previewImgUsuarioHandler = (imagen) => {
    if(imagen.target.files[0] !== undefined){
      setNewUserPhoto(imagen.target.files[0])
      setNewUserPhotoPreview(URL.createObjectURL(imagen.target.files[0]))
    }
  }

  const deleteAuthorHandler = (email, imgUrl) => {
    console.log("Eliminar autor con email => ", email, imgUrl)
    dispatch(eliminarAutorAccion(email, imgUrl))
  }

  const updateAuthorHandler = (email) => {
    setModoEdicion(true)
    let editAuthor = autoresAMostrar.find(autor => autor.email === email)
    setNewUserEmail(editAuthor.email)
    setNewUserName(editAuthor.name)
    setNewUserPhotoPreview(editAuthor.photoUrl)
    setNewRRSS(editAuthor.redes)
    setNewUserPhoto(false)
  }

  if(loading){
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
              <span className="visually-hidden">Cargando...</span>
          </div>
      </div>
    )
  }else {
    return (
      <div className='container mt-3 text-center'>
          <h1>Autores</h1>
          <div className="autor__main text-center mt-5">
          {
            autoresAMostrar.length === 0 ? (
              <h2>No hay autores en el catálogo</h2>
            ) : (
              autoresAMostrar.map((autor, index) => (
                <div className="card" key={index} style={{width: "18rem"}}>
                  <div className="card-body">
                    <img src={autor.photoUrl} alt="" width="100px" height="100px" className="mb-3 rounded-circle"/>
                    <h5 className="card-title">{autor.name}</h5>
                    <p className="card-title">{autor.email}</p>
                    <div className="d-flex justify-content-evenly">
                      <button className='btn btn-sm btn-warning' onClick={()=>{updateAuthorHandler(autor.email)}}>Editar</button>
                      <button className='btn btn-sm btn-danger' onClick={()=>{deleteAuthorHandler(autor.email, autor.photoURL)}}>Eliminar</button>
                    </div>
                  </div>
                </div>
              ))
            )
          }
          </div>

          {/* FORMULARIO */}
          <div className="autor__main__agregar text-center mt-5">
            <h2>{modoEdicion ? 'Editar autor' : 'Agregar más autores'}</h2>
            <form onSubmit={modoEdicion ? submitUpdateHandler : submitHandler} className="d-flex flex-column">
              <div className="p-2 mb-3">
                <label htmlFor="email" className='form-label fs-4'>Email</label>
                {modoEdicion ? (
                  <input 
                    type="email" 
                    id="email"
                    className='form-control text-center'
                    value={newUserEmail}
                    placeholder="ejemplo@ejemplo.com"
                    disabled
                  />
                ):(
                  <input 
                    type="email" 
                    id="email"
                    className='form-control text-center'
                    value={newUserEmail}
                    onChange={e=>setNewUserEmail(e.target.value)}
                    placeholder="ejemplo@ejemplo.com"
                  />
                )}
              </div>
              <div className="p-2 mb-3">
                <label htmlFor="name" className='form-label fs-4'>Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  className='form-control text-center'
                  value={newUserName}
                  onChange={e=>setNewUserName(e.target.value)}
                  placeholder="Juan Perez"
                />
              </div>
              <br />
              <div className='mb-3 fs-3 fw-semibold'>Redes Sociales</div>
              <div className='redes_sociales-container'>
                  <label htmlFor='id_instagram' className='form-label'>Instagram</label>
                  <input 
                    type="text" 
                    id='id_instagram'
                    className='form-control mb-3 text-center'
                    value={newRRSS.instagram.link}
                    onChange={e=>setNewRRSS({...newRRSS, instagram: {link: e.target.value}})}
                    placeholder='Opcional'
                  />
                  <label htmlFor='id_facebook' className='form-label'>Facebook</label>
                  <input 
                    type="text" 
                    id='id_facebook'
                    className='form-control mb-3 text-center'
                    value={newRRSS.facebook.link}
                    onChange={e=>setNewRRSS({...newRRSS, facebook: {link: e.target.value}})}
                    placeholder='Opcional'
                  />
                  <label htmlFor='id_twitter' className='form-label'>Twitter</label>
                  <input 
                    type="text" 
                    id='id_twitter'
                    className='form-control mb-3 text-center'
                    value={newRRSS.twitter.link}
                    onChange={e=>setNewRRSS({...newRRSS, twitter: {link: e.target.value}})}
                    placeholder='Opcional'
                  />
              </div>


              <div className="p-2 preview">
                {
                  newUserPhotoPreview === "" ? (
                    <p>No se ha seleccionado una imagen para subir.</p>
                  ) : (
                    <img src={newUserPhotoPreview} width="100px" height="100px" className="mb-3 rounded-circle"/>
                  )
                }
              </div>
              <div className="p-2 mb-5">
                <label 
                  htmlFor="imgUsuario"
                  className='btn btn-success'
                >
                  {modoEdicion ? "Actualizar imagen" : "Subir imagen"}
                </label>
                <input 
                  type="file"
                  className='form-control'
                  id="imgUsuario"
                  style={{opacity: 0, display: "none"}}
                  onChange={e=>previewImgUsuarioHandler(e)}
                  accept=".jpg, .jpeg, .png"
                />
              </div>
              {errorMsg !== "" && (<p className='bg-danger text-white p-3'>{errorMsg}</p>)}
              {okMsg !== "" && ( <p className="bg-success text-white p-3">{okMsg}</p> )}
              {modoEdicion ? (
                <button className={uploading ? "btn btn-dark disabled" : "btn btn-warning btn-lg"} type='submit'>Editar autor</button>
              ):(
                <button className={uploading ? "btn btn-dark disabled" : "btn btn-dark btn-lg"} type='submit'>Subir nuevo autor</button>
              )}
            </form>
          </div>
      </div>
    )
  }
}

export default CreateUser