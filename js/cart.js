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
    <div class="row">
            <div class="col-3">
                <img src="` + articles.src + `" alt="` + "" + `" class="img-thumbnail w-50">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ articles.name +`</h4> 
                    <input type="text" style="width:50px;height:30px" id="fname" name="fname">
                    <label for="fname"></label>
                    </div>
                    <div> Moneda:`+" "+ articles.currency +" "+ ``+ articles.unitCost + ` </div>
                    <div>
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById('cart').innerHTML = htmlContentToAppend;
    }
}

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