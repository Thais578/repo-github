document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario6").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  var articlesArray= [];

  function cartProducts(array) {

    let htmlContentToAppend = "";

    for(let i = 0; i < array.articles.length; i++){
        let articles = array.articles[i];

        htmlContentToAppend += `
    
    <div class="container" class="text-center">
    <thead>
    <div class="container mb-4">
      <div class="row">
          <div class="col-12">
              <div class="table-responsive">
                  <table class="table table-striped">
                      <thead>
                          <tr>
                              <th scope="col class="text-center">Imagen</th>
                              <th scope="col">Producto</th>
                              <th scope="col" class="text-center">Cantidad</th>
                              <th scope="col" class="text-center">Precio</th>
                              <th scope="col" class="text-center">Moneda</th>
                              <th scope="col" class="text-center">Eliminar</th>


                          </tr>
                      </thead>

    <div class="row">
            <div class="col-3">
            <tbody>
            <tr>
                <td> <img src="` + articles.src + `" alt="` + "" + `" class="img-thumbnail w-50"></td>
                <td> <div class="d-flex w-100 justify-content-between"> <h6 class="mb-1">`+ articles.name +`</h6></td>
                <td><select name="select" id="cant" onchange="subTotal(this.value)">
                <option value="1">1</option> 
               <option value ="2">`+ articles.count+`</option>  
               <option value="3">3</option></td>
               </select>
                
                <td class="text-center">  <div id="costo"> `+ articles.unitCost + ` </div></td>
                <td class="text-center">   <div> `+ articles.currency +" "+ `  </div></td>
                <td class="text-center"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
               
            </tr>

          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Sub-Total</td>
          <td class="text-right"> <div id="resultado"></div></td>
      </tr>
      
      <tr>	
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
          
          </td>
          <td class="text-right"></td>
      </tr>
      <tr>	
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>Costo de envío</td>
      <td class="text-right"><div id="resultado3"></div></td>
  </tr>
  
      <tr>	
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
      
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#metodoDePago">
  Forma de pago
</button>
<!-- Modal -->
<div class="modal fade" id="metodoDePago" tabindex="-1" aria-labelledby="exampleModalLabelPago" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabelPago">Método de pago</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container">
      <div class="col-sm-12 col-md-6 text-left">
      <div class="custom-control custom-radio">
                        <input id="transferencia" name="pago" type="radio" value="2"class="custom-control-input" required="">
                        <label class="custom-control-label" for="transferencia">Transferencia</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input id="tarjeta" name="pago" value="3" type="radio" class="custom-control-input" required="">
                        <label class="custom-control-label" for="tarjeta">Tarjeta</label>
                      </div>
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </td>
      <td class="text-right"></td>
  </tr>
      



  

      <tr>	
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><strong>Total</strong></td>
      <td class="text-right"><strong><div id="resultado2"></div></strong></td>
  </tr>
  </tbody>
</table>
</div>
</div>
<div class="col mb-2">
<div class="row">
<div class="col-sm-12 col-md-6 text-right">

<div class"container">
      <div class="col-sm-12 col-md-6 text-left">
      <p>Dirección: <input type="text" name="nombre"></p>
      <p>País: <select name="menu"></p>
  <option value="0">...</option>
  <option value="1">Uruguay</option>
  <option value="2">Argentina</option>
</select>

      <div class="custom-control custom-radio">
      <input id="goldradio" name="tEnvio" onclick="total();cEnvio()" type="radio" class="custom-control-input" value="1" required="">
      <label class="custom-control-label" for="goldradio">Premium (2-5 días)</label>
      </div>
      <div class="custom-control custom-radio">
                        <input id="premiumradio" name="tEnvio"  onclick="total2();cEnvio2()" type="radio" value="2" class="custom-control-input" required="">
                        <label class="custom-control-label" for="premiumradio">Express (5-8 días)</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input id="standardradio" name="tEnvio" onclick="total3();cEnvio3()" value="3" type="radio" class="custom-control-input" required="">
                        <label class="custom-control-label" for="standardradio">Standard (12 a 15 días)</label>
                      </div>
                      
                      
      </div>
      </div>
</div>
</div>
</div>
</div>
</div>


<button class="btn btn-secondary btn-sm">Comprar</button>
<div id="errorEnvio"></div>

    `
    
    }
    document.getElementById('cart').innerHTML = htmlContentToAppend;
    }
    
    function subTotal() {
        let cantidad= document.getElementById("cant").value;
        let costo= document.getElementById("costo").innerHTML;
        var cuenta = cantidad * costo;
     document.getElementById("resultado").innerHTML = cuenta;
        
    };

    function total2() {
      let cantidad= document.getElementById("cant").value;
      let costo= document.getElementById("costo").innerHTML;
      let costoEnvio= document.getElementById("premiumradio").innerHTML= ((0.07)* cantidad * costo)
      var cuenta2 = cantidad * costo + costoEnvio;
   document.getElementById("resultado2").innerHTML = cuenta2;
      
  };
  function total() {
    let cantidad= document.getElementById("cant").value;
    let costo= document.getElementById("costo").innerHTML;
    let costoEnvio= document.getElementById("goldradio").innerHTML= ((0.15)* cantidad * costo)
    var cuenta2 = cantidad * costo + costoEnvio;
 document.getElementById("resultado2").innerHTML = cuenta2;
    
};

function total3() {
  let cantidad= document.getElementById("cant").value;
  let costo= document.getElementById("costo").innerHTML;
  let costoEnvio= document.getElementById("standardradio").innerHTML= ((0.05)* cantidad * costo)
  var cuenta2 = cantidad * costo + costoEnvio;
document.getElementById("resultado2").innerHTML = cuenta2;
  
};
function cEnvio() {
  let cantidad= document.getElementById("cant").value;
    let costo= document.getElementById("costo").innerHTML;
    let costoEnvio= document.getElementById("goldradio").innerHTML= ((0.15)* cantidad * costo)
    var cuenta3 = costoEnvio;
 document.getElementById("resultado3").innerHTML = cuenta3;

}
function cEnvio2() {
  let cantidad= document.getElementById("cant").value;
    let costo= document.getElementById("costo").innerHTML;
    let costoEnvio= document.getElementById("premiumradio").innerHTML= ((0.07)* cantidad * costo)
    var cuenta3 = costoEnvio;
 document.getElementById("resultado3").innerHTML = cuenta3;

}
function cEnvio3() {
  let cantidad= document.getElementById("cant").value;
    let costo= document.getElementById("costo").innerHTML;
    let costoEnvio= document.getElementById("standardradio").innerHTML= ((0.05)* cantidad * costo)
    var cuenta3 = costoEnvio;
 document.getElementById("resultado3").innerHTML = cuenta3;

}

   
   
    function validarTipoEnvio() {
      var envio= document.getElementsByName("tEnvio");
      var validarEnvio = false;
      i= 0
      while(!validarEnvio && i < envio.length) {
        if(envio[i].checked) {
          validarEnvio = true
      }
      i++;
    }
    if(validarEnvio) {
      document.getElementById("errorEnvio").innerHTML = "Debes seleccionar un tipo de envío";
      return validarEnvio;
    } else{
      document.getElementById("errorEnvio").innerHTML = "";
      return validarEnvio;
    }}
    

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
getJSONData(CART_INFO_URL).then(function(resultObj) {
  if (resultObj.status === "ok") {

articlesArray = resultObj.data;
      cartProducts(articlesArray);
  }
});
    });
    