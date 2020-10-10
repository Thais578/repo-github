document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario6").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  var articlesArray= [];

  function cartProducts(array) {

    let htmlContentToAppend = "";

    for(let i = 0; i < array.articles.length; i++){
        let articles = array.articles[i];

        htmlContentToAppend += `
    
    <div class="container">
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
                <td> <div class="d-flex w-100 justify-content-between"> <h4 class="mb-1">`+ articles.name +`</h4></td>
                <td><select name="select" id="cant" onchange="subTotal(this.value)">
                <option value="1">1</option> 
               <option value ="2">`+ articles.count+`</option>  
               <option value="3">3</option></td>
                
                <td class="text-right">  <div id="costo"> `+ articles.unitCost + ` </div></td>
                <td class="text-right">   <div> `+ articles.currency +" "+ `  </div></td>
                <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
               
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
          <td><strong>Total</strong></td>
          <td class="text-right"><strong></strong></td>
      </tr>
  </tbody>
</table>
</div>
</div>
<div class="col mb-2">
<div class="row">
<div class="col-sm-12 col-md-6 text-right">
  <button class="btn btn-secondary btn-sm">Comprar</button>
</div>
</div>
</div>
</div>
</div>

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
    