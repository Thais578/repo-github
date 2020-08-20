const ORDER_ASC_BY_PRICE = "PMPm";
const ORDER_DESC_BY_PRICE= "PmPM";
const ORDER_BY_PROD_SOLD = "Cant.";
var categoriesArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.price < b.price ){ return -1; }
            if ( a.price > b.price ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.price > b.price ){ return -1; }
            if ( a.price < b.price ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productSold);
            let bCount = parseInt(b.productSold);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;

function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++) {
        let product = array[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(category.productSold) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.productSold) <= maxCount))){

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
        <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name +`</h4>
                        <small class="text-muted">Costo:`+ product.currency + ``+ product.cost + `</br>Vendidos:` + product.soldCount + ` </small>
                    </div>
                    <div> `+ product.description + ` </div>

                </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
});

}



    

    