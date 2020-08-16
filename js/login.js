function validar() {
var InputUser= document.getElementById("InputUser").value;
var inputPassword= document.getElementById("inputPassword").value;
console.log("inputPassword:",inputPassword)
console.log("inputUser:",InputUser)
  if(InputUser == null && "") {
    document.getElementById("error").innerHTML="Inserte nuevamente el usuario"
  
}else if (inputPassword == null && "") {
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