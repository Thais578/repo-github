document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("keyUsuario6").innerHTML=  miStorage.getItem("keyUsuario")
    
  });
  
  function cartProducts() {
    let product = 
    `
    <a href="product-info.html" div class="list-group-item list-group-item-action">
    <div class="row">
            <div class="col-3">
                <img src="` + product.imgSrc + `" alt="` + "" + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ product.name +`</h4>
                    <small class="text-muted">Moneda:`+ product.currency + ``+ product.Unitcost + `</br>Cantidad:` + product.count + ` </small>
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById('cart').innerHTML = product;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
getJSONData(CART_INFO_URL).then(function(resultProd) {
  if (resultProd.status === "ok") {
let product = resultProduct.data
      cartProducts(product);
  }
})};