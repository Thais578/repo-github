document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario4").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  
  var persona, myJSON, text, obj;

  // Storing data:
  persona = { name: "Emma", age: 31, city: "Montevideo" };
  myJSON = JSON.stringify(persona);
  sessionStorage.setItem("testJSON", myJSON);
  
  // Retrieving data:
  text = sessionStorage.getItem("testJSON");
  obj = JSON.parse(text);
  document.getElementById("apellidos").innerHTML = obj.name;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});