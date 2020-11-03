document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario4").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  var miStorage= window.localStorage;
  function persona() {

var persona= {}
persona.nombres = document.getElementById("nombres").value;

  var myJSON = JSON.stringify(persona);
  localStorage.setItem("testJSON", myJSON);
 
  }
  
  
 

  
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
 
});