document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario6").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  var articlesArray= [];
  var mensajeArray= [];

function compra(mensaje) {
document.getElementById("compraExito").innerHTML= mensaje
}
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
                <option value="0">...</option>
                <option value="1">1</option> 
               <option value ="2">`+ articles.count+`</option>  
               <option value="3">3</option></td>
               </select>  
                <td class="text-center">  <div id="costo"> `+ articles.unitCost + ` </div></td>
                <td class="text-center">   <div> `+ articles.currency +" "+ `  </div></td>
                <td class="text-center"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
              
            
            </tbody>
            </table>  
            
            
            <div class"container">
            
            
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                            <div class="mx-auto" style="witdth:200px;"
                            <h6>Método de envío</h6>
                                <hr>
                                </div>
                                <div class="row justify-content-md-center">
                                <div class="col-md-8 order-md-1">            
                  <div class"c">
                  <div class="justify-text-center">
                  <div class="row">
                  <div class="col-md-12 mb-3">
                  <div> Dirección: <input type="text"  name="nombre" id="direccion"></div> 
                  <p></p>
                  <div id="errorDireccion"></div>
                  <p></p>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-md-12 mb-3">
                  <div> Calle: <input type="text"  name="nombre" id="calle"></div>
                  <p></p> 
                  <div id="errorCalle"></div>
                  <p></p>
                  </div></div>
                  <div> Número: <input type="text"  name="nombre" id="numero">
                  <p></p>
                  </div> <div id="errorNumero"></div>
                  <p></p>
                  <div> Esquina: <input type="text"  name="nombre" id="esquina"></div> 
                  <p></p>
                  <div id="errorEsquina"></div>
                  <p></p>

                  <p>País: <select id="pais"></p>
              <option value="0">...</option>
              <option value="1">Uruguay</option>
            </select>
            <p></p>
            <div id="errorPais"></div>
            <p></p>
                  <div class="custom-control custom-radio">
                  <input id="goldradio" name="tEnvio" onclick="total();cEnvio()" type="radio" class="custom-control-input" value="1" required="">
                  <label class="custom-control-label" for="goldradio">Premium (2-5 días)</label>
                  </div>
                  <div class="custom-control custom-radio">
                                    <input id="premiumradio" name="tEnvio"  onclick="total2();cEnvio2()" type="radio" value="2" class="custom-control-input" required="">
                                    <label class="custom-control-label" for="premiumradio">Express (5-8 días)</label>
                                  </div>
                                  <div class="custom-control custom-radio">
                                    <input id="standardradio" name="tEnvio" onclick="total3();cEnvio3();" value="3" type="radio" class="custom-control-input" required="">
                                    <label class="custom-control-label" for="standardradio">Standard (12 a 15 días)</label>
                                  </div>
                                  <p></p>
                                  <div id="errorEnvio"></div>

                                  </div></div>
                                  
                       </div>           
                  </div>
                  </div>
                  </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
           <p></p>
           <p></p> 
            <div class="col-md-12">
            <p></p>
              <ul class="list-group mb-3">
              <p></p>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Subtotal</h6>
                    </div>
                    <span class="text-muted"><div id="resultado"></span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Método de envío</h6>
                    </div>
                    <span class="text-muted"><div id="resultado3"></span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong><div id="resultado2"></strong>
                  </li>
                </ul>
                <div>
                </div>
                
</div>
</div>
<div>



<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-sm" onclick="validacionGlobal()" data-toggle="modal" data-target="#metodoDePago">
 Comprar
</button>
<!-- Modal -->
<div class="modal fade" id="modal2"  tabindex="-1" aria-labelledby="exampleModalLabelPago" aria-hidden="true">
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
      <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Tarjeta de crédito</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Transferencia bancaria</button>
  
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
       <div class="container"
       <form class="credit-card">
  <div class="form-header">
    <h4 class="title">Detalles</h4>
  </div>
  <br>
  <div class="col-50">
            <label for="fname">Tarjetas aceptadas</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            
          
        </div>
        <label>


  <div class="form-body">
    <!-- Card Number -->
    <input type="text" id="nTarjeta"class="card-number" placeholder="Número de tarjeta">
    <div id="errorNTarjeta"></div>
 
    <!-- Date Field -->
    <div class="date-field">
      <div class="month">
         <select name="Month" id="mes">
        <option value=0>Mes</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
        <div id="errorMes"></div>
      </div>
      <div class="year">
        <select name="Year" id="año">
        <option value="0">Año</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <div id="errorAño"></div>
      </div>
    </div>
 
    <!-- Card Verification Field -->
    <div class="card-verification">
      <div class="cvv-input">
        <input type="text" id="cvv" placeholder="CVV">
        <div id="errorCvv"></div>
      </div>

    </div>
  </div>
  <button  type="button" class="btn btn-secondary btn-sm"  id="button"   onclick="validacionTotal();">Enviar</button>
  <span id="compraExito" style="display: none"></span>
  </form>
         

       </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
      <input type="text" id="banco" class="card-number" placeholder="Banco">
      <div id="errorBanco"></div>
      <input type="text" class="card-number" id="nCuenta" placeholder="Número de cuenta">
      <div id="errorCuenta"></div>
      </div>
      <br>
      <button type="button" class="btn btn-secondary btn-sm"  onclick="validarCuenta();">Enviar</button>
      <span id="compraExito2" name="e"></span>
    </div>
    
  </div>
</div>
      </div>
      </div>
      </div>
     
    </div>
  </div>
</div>
  
 


<br>

<div id="errorCantidad"></div>


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


   
   //Validar radio
    function validarTipoEnvio() {
      var envio= document.getElementsByName("tEnvio")
      var marcVacio = false
     for (let i= 0; i<envio.length; i++) {
       if (envio [i].checked){
         marcVacio= true
        }}
      if(marcVacio) {
        
        document.getElementById("errorEnvio").style.display= "none";
        return true
     } else {
      document.getElementById("errorEnvio").innerHTML= "Ingresa una opción";
      return false; 
     }}
    
     

    function validarDireccion() {
      var direccion= document.getElementById("direccion").value
      if(direccion=="") {
        document.getElementById("errorDireccion"). innerHTML= "Ingresa una direccion";
        return false;
      }else{
        document.getElementById("errorDireccion").style.display= "none";
        return true
      }
    }
function validarPais() {
    var pais=document.getElementById("pais")
    if(pais.value==0 ||pais.value == "") {
    document.getElementById("errorPais").innerHTML= "Ingresa un pais";
        return false;

      }else{
        document.getElementById("errorPais").style.display= "none";
        return true
      }}
    
      

          function validarCalle() {
            var calle= document.getElementById("calle").value
            if(calle=="") {
              document.getElementById("errorCalle"). innerHTML= "Ingresa una calle";
              return false;
            }else{
              document.getElementById("errorCalle").style.display= "none";
              return true
            }
          }

          function validacionGlobal() {
            var calle= validarCalle(document.getElementById("calle").value);
            var pais= validarPais(document.getElementById("pais").value)
            var direccion= validarDireccion(document.getElementById("direccion").value);
            var tipoenvio= validarTipoEnvio();
            var esquina=validarEsquina(document.getElementById("esquina").value)
            var cantidad= validarCantidad(document.getElementById("cant"))
            var numero= validarNumero(document.getElementById("numero").value)

            var todoValido= calle && pais && direccion  && tipoenvio && esquina && cantidad && numero ;
            if (todoValido) {
              $('#modal2').modal('show');
            }


          }
          function validarCuenta() {
            var nCuenta= validarNCuenta(document.getElementById("nCuenta").value);
            var banco= validarBanco(document.getElementById("banco").value);
            var todoValid= nCuenta && banco;
            if (todoValid) {
              document.getElementById("compraExito2").innerHTML="¡Compra exitosa!"
            }
          }

          //

          function validacionTotal() {
            var mesT= validarMes(document.getElementById("mes".value))
            var añoT= validarDireccion(document.getElementById("año").value);
            var cvvT= validarCvv(document.getElementById("cvv").value);
            var nTarjetaT=validarNTarjeta(document.getElementById("nTarjeta").value)

            var todoValidado= mesT && añoT && cvvT  && nTarjetaT;
            if (todoValidado) {
              document.getElementById("compraExito").style.display="block"
            
          }
          
          }

          

          function validarNumero() {
            var numero= document.getElementById("numero").value
            if(numero=="") {
              document.getElementById("errorNumero"). innerHTML= "Ingresa un número";
              return false;
            }else{
              document.getElementById("errorNumero").style.display= "none";
              return true
            }
          }

          

          function validarMes() {
            var mes =document.getElementById("mes")
            if(mes.value==0 ||mes.value == "") {
            document.getElementById("errorMes").innerHTML= "Ingresa un mes";
                return false;
        
              }else{
                document.getElementById("errorMes").style.display= "none";
                return true
              }}

              function validarAño() {
                var año =document.getElementById("año")
                if(año.value==0 ||año.value == "") {
                document.getElementById("errorAño").innerHTML= "Ingresa un año";
                    return false;
            
                  }else{
                    document.getElementById("errorAño").style.display= "none";
                    return true
                  }}


                  function validarCvv() {
                    var cvv= document.getElementById("cvv").value
                    if(cvv=="") {
                      document.getElementById("errorCvv"). innerHTML= "Ingrese CVV";
                      return false;
                    }else{
                      document.getElementById("errorCvv").style.display= "none";
                      return true
                    }
                  }

                  function validarNCuenta() {
                    var nCuenta= document.getElementById("nCuenta").value
                    if(nCuenta=="") {
                      document.getElementById("errorCuenta"). innerHTML= "Ingrese un número de cuenta";
                      return false;
                    }else{
                      document.getElementById("errorCuenta").style.display= "none";
                      return true
                    }
                  }

                  function validarNTarjeta() {
                    var nTarjeta= document.getElementById("nTarjeta").value
                    if(nTarjeta=="") {
                      document.getElementById("errorNTarjeta"). innerHTML= "Ingrese un número de tarjeta";
                      return false;
                    }else{
                      document.getElementById("errorNTarjeta").style.display= "none";
                      return true
                    }
                  }

                  function validarBanco() {
                    var banco= document.getElementById("banco").value
                    if(banco=="") {
                      document.getElementById("errorBanco"). innerHTML= "Ingrese un banco";
                      return false;
                    }else{
                      document.getElementById("errorBanco").style.display= "none";
                      return true
                    }
                  }

                  function validarEsquina() {
                    var esquina= document.getElementById("esquina").value
                    if(esquina=="") {
                      document.getElementById("errorEsquina"). innerHTML= "Ingresa una esquina";
                      return false;
                    }else{
                      document.getElementById("errorEsquina").style.display= "none";
                      return true
                    }
                  }
                  
                  function validarCantidad() {
                    var cantidad =document.getElementById("cant")
                    if(cantidad.value==0 ||cantidad.value == "") {
                    document.getElementById("errorCantidad").innerHTML= "Ingresa una cantidad";
                        return false;
                
                      }else{
                        document.getElementById("errorCantidad").style.display= "none";
                        return true
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

  getJSONData(CART_BUY_URL).then(function(resultObj) {
    if (resultObj.status === "ok") {
  
  mensajeArray = resultObj.data;
        compra(mensajeArray.msg);
    }
  });
    });
 