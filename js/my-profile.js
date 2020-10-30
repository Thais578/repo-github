document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario4").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  
var miStorage= window.sessionStorage;
function perfil() {
var inputNombres= document.getElementById("inputNombres").value;
var inputApellidos= document.getElementById("inputApellidos").value;
  sessionStorage.setItem("keyNombres",inputNombres);
  sessionStorage.setItem("keyApellidos",inputApellidos);
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});