function validar() {
  var user= document.getElementById("user" ).value;
var password= document.getElementById('password').value;
  if(user == null) {
    document.getElementById('error').innerHTML="Inserte nuevamente el usuario"
  
}else if (password == null) {
  document.getElementById('error').innerHTML="Inserte nuevamente el usuario"
}else{
window.location.href='Pagina.html'
}
}









//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});