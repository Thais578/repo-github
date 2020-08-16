const user = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const p = document.getElementById("alertas");

form.addEventListener("submit", e=>{
  e.preventDefault()
  let alertas = ""
  let entrar= false
  let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  if(user.value.length <6) {
    alertas += "El usuario no es válido <br>"
    entrar = true
  }
  if(!regexEmail.test(email.value)) {
    alertas += "El usuario no es válido <br>"
    entrar = true
  }
})









//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});