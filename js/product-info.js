var product = {};

function images(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("images").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCostHTML = document.getElementById("productCost");
            let productRelatedProductsHTML = document.getElementById("productRelatedProducts");
            
        
            productNameHTML.innerHTML = product.name;
           productDescriptionHTML.innerHTML = product.description;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;
            productCurrencyHTML.innerHTML = product.currency;
            productCostHTML.innerHTML = product.cost;
            productRelatedProductsHTML.innerHTML = product.relatedProducts;

            //Muestro las imagenes en forma de galería
            images(product.images);
        }
    });
});

var comment = {};

function comments(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comment = array[i];

        htmlContentToAppend += `
        <div>
        <br>
        Puntuación: `+ comment.score + `<br>
        ` + comment.description + ` <br>
        <small class="texted-muted"> Usuario: ` + comment.user + '' + comment.dateTime + `</small>
        <br> <br>
        <div>
        `

        document.getElementById("comment").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comment = resultObj.data;
              comments(comment);
            }
        });
    });