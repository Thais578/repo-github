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
 
  function validarNombres() {
    var nombres= document.getElementById("nombres").value
  
    if(nombres=="") {
      document.getElementById("errorNombres").innerHTML= "Ingrese un nombre";
      return false;
   
   } else {
    document.getElementById("errorNombres").style.display= "none";
      return true
   }}

   function validarApellidos() {
    var apellidos= document.getElementById("apellidos").value
  
    if(apellidos=="") {
      document.getElementById("errorApellidos").innerHTML= "Ingrese un Apellido";
      return false;
   
   } else {
    document.getElementById("errorApellidos").style.display= "none";
      return true
   }}

   function validarEmail() {
    var nombres= document.getElementById("email").value
  
    if(nombres=="") {
      document.getElementById("errorEmail").innerHTML= "Ingrese un email";
      return false;
   
   } else {
    document.getElementById("errorEmail").style.display= "none";
      return true
   }}

   function validarEdad() {
    var nombres= document.getElementById("edad").value
  
    if(nombres=="") {
      document.getElementById("errorEdad").innerHTML= "Ingrese una edad";
      return false;
   
   } else {
    document.getElementById("errorEdad").style.display= "none";
      return true
   }}

   function validarTel() {
    var nombres= document.getElementById("tel").value
  
    if(nombres=="") {
      document.getElementById("errorTel").innerHTML= "Ingrese un teléfono";
      return false;
   
   } else {
    document.getElementById("errorTel").style.display= "none";
      return true
   }}
  
    
  function borrar() {
    localStorage.removeItem("Persona")
    text = localStorage.getItem("Persona");
    obj = JSON.parse(text);
    document.getElementById("nombres").innerHTML = obj.Nombres 
    
  }

   


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  text = localStorage.getItem("Persona");
  obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.Nombres;
   
    text = localStorage.getItem("Persona");
    obj = JSON.parse(text);
    document.getElementById("demo2").innerHTML = obj.Apellidos;
    
    text = localStorage.getItem("Persona");
    obj = JSON.parse(text);
    document.getElementById("demo3").innerHTML = obj.Email;
  
    text = localStorage.getItem("Persona");
    obj = JSON.parse(text);
    document.getElementById("demo4").innerHTML = obj.Edad;
    
    text = localStorage.getItem("Persona");
    obj = JSON.parse(text);
    document.getElementById("demo5").innerHTML = obj.Telefono;
    
});


 
  