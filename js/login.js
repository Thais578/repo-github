var miStorage= window.sessionStorage;
function validar() {
var inputUser= document.getElementById("inputUser").value;
var inputPassword= document.getElementById("inputPassword").value;
  sessionStorage.setItem("keyUsuario",inputUser);
  if(inputUser == null || inputUser == "") {
    document.getElementById("error").innerHTML="Inserte nuevamente el usuario"
  // Else if, no funcionaba, por lo que tuve que quitar el else.
} if  (inputPassword == null || inputPassword == "") {
  document.getElementById("error2").innerHTML="Inserte nuevamente la contraseña"
}else{ 
window.location.href="Pagina.html"
}
}










//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});