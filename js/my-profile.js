document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario4").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  var miStorage= window.sessionStorage;
  function persona() {

var nombres= document.getElementById("nombres").value;

  sessionStorage.setItem("keyNombres",nombres);
 
  }
 
  
  
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});