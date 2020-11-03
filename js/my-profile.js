document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario4").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  var miStorage= window.localStorage;
  function persona() {

var persona= {}
persona.Nombres = document.getElementById("nombres").value;
persona.Apellidos= document.getElementById("apellidos").value;
persona.Email= document.getElementById("email").value;
persona.Edad= document.getElementById("edad").value;
persona.Telefono= document.getElementById("tel").value;

  var myJSON = JSON.stringify(persona);
  localStorage.setItem("Persona", myJSON);
 


  }
  
  text = localStorage.getItem("Persona");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.Nombres;
 
  text = localStorage.getItem("Persona");
  obj = JSON.parse(text);
  document.getElementById("demo2").innerHTML = obj.Apellidos;
  
  
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
 
});