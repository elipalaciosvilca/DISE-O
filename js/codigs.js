const botones = document.querySelector('#botones')
const nombreUsuario =document.querySelector('#nombreUsuario')
const contenidoProtegido =document.querySelector('#contenidoProtegido')
const formulario=document.querySelector('#formulario')
const inputChat = document.querySelector('#inputChat')

firebase.auth().onAuthStateChanged( user => {
  if(user){
    console.log(user)
    botones.innerHTML = /*html*/`
    <button class="btn btn-outline-danger" id='btnCerrarSesion'>Cerrar Sesión</button>
    `
      nombreUsuario.innerHTML = user.displayName
      CerrarSesion()
      contenidoProtegido.innerHTML =/*html*/`
      <p class="text-center lead mt-5">Bienvenido ${user.email} </p>  
      `
      formulario.classList ='input-group py-3 fixed-bottom container'
      contenidoChat(user)
  }else{
      console.log('no existe user')
      botones.innerHTML = /*html*/`
      <button class="btn btn-outline-success mr-2" id='btnAcceder'>Acceder</button>  
      `
      iniciarSesion()
      nombreUsuario.innerHTML = 'Chat'
      contenidoProtegido.innerHTML = /*html*/`
       <p class="text-center lead mt-5">Debes iniciar Sesión></p>
      `
      formulario.classList ='input-group py-3 fixed-bottom container d-none'
    }
})

const contenidoChat = (user) => {
      contenidoProtegido.innerHTML =/*html*/`
        <p class="text-center lead mt-5">Bienvenido ${user.email} </p>  
       ` 
      formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(inputChat.value)
        if(!inputChat.value.trim()){
          console.log('input vacio')
          return

    })


 const iniciarSesion = () => {
  const btnAcceder = document.querySelector('#btnAcceder')
btnAcceder.addEventListener('click', async() => {
       //console.log('me diste click en acceder')
       try {
         const provider = new firebase.auth.GoogleAuthProvider();
         await firebase.auth().signInWithPopup(provider)
       } catch (error) {
            console.log(error)
       }
   })
} 

const CerrarSesion = () => {
  botones.innerHTML = /*html*/`
  <button class="btn btn-outline-danger" id='btnCerrarSesion'>Cerrar Sesión</button>
  `
  const btnCerrarSesion = document.querySelector('#btnCerrarSesion')
  btnCerrarSesion.addEventListener('click', () => firebase.auth().signOut())
}