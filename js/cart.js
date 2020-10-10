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
                     </div>
                     <select name="select" onchange="subTotal(this.value)">
                     <option value="value1">1</option> 
                    <option value ="2">`+ articles.count+`</option>  
                    <option value="value3">3</option>
                    </div>
                    </select>
                    <div> Moneda:`+" "+ articles.currency +" "+ ` </div>
                    <div id="costo"> `+ articles.unitCost + ` </div>
                    <div>
                </div>
            </div>
        </div>
    </div>
    `
    
    }
    document.getElementById('cart').innerHTML = htmlContentToAppend;
    }
    
    function subTotal() {
        var cantidad= document.getElementById("select").value
        var costo= document.getElementById("costo").value
        var cuenta = cantidad * costo;
        
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
    