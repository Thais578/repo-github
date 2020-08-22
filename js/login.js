function validar() {
var inputUser= document.getElementById("inputUser").value;
var inputPassword= document.getElementById("inputPassword").value;
var miStorage= window.sessionStorage;
console.log("inputPassword:",inputPassword)
console.log("inputUser:",inputUser)
  if(inputUser == null || inputUser == "") {
    document.getElementById("error").innerHTML="Inserte nuevamente el usuario"
  
}else if (inputPassword == null || inputPassword == "") {
  document.getElementById("error2").innerHTML="Inserte nuevamente la contraseña"
}else{
  var user = document.getElementById("inputUser").value;
  miStorage.setItem("keyUsuario",inputUser);
window.location.href="Página.html"
}
}









//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});