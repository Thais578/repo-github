function validar() {
var email= document.getElementById("email").value;
var contraseña= document.getElementById("contraseña").value;

  if(email == null) {
    document.getElementById("error").innerHTML="Inserte nuevamente el usuario"
  
}else if (contraseña == null) {
  document.getElementById("error").innerHTML="Inserte nuevamente la contraseña"
}else{
window.location.href="Página.html"
}
}









//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});