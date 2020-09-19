var stars= null;

document.addEventListener("DOMContentLoaded", function(e){
  document.getElementById("keyUsuario7").innerHTML=  miStorage.getItem("keyUsuario")
  
});


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
            
            
        
            productNameHTML.innerHTML = product.name;
           productDescriptionHTML.innerHTML = product.description;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;
            productCurrencyHTML.innerHTML = product.currency;
            productCostHTML.innerHTML = product.cost;
          

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
        <small class="texted-muted"> Usuario: ` + comment.user + ' ' + comment.dateTime + `</small>
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

    
    
    function enviar(){
      comentario = document.getElementById("inputComment").value; 
  
      if (stars == null && comentario == ""){
          document.getElementById("requerido").innerHTML="Inserte un comentario";
          document.getElementById("required").innerHTML="Ingrese una puntuación";
      } else {
          if (stars == null){
              document.getElementById("required").innerHTML="Ingrese una puntuación";
          } else {
              if (comentario == ""){
                  document.getElementById("requerido").innerHTML="Inserte un comentario";
              } else {
                  document.getElementById("required").innerHTML="";
                  document.getElementById("requerido").innerHTML="";
                  agregarComentario();
              }
          }
      }
  }
    
    function agregarComentario(){
        var fecha = new Date();
        var date = fecha.getFullYear() + '-' + fecha.getMonth() + '-' + fecha.getDate() + ' ' + fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
        let htmlContentToAppend = "";
        htmlContentToAppend = `
            <div>
            <br>
            Puntuación: `+ stars + `<br>
            ` + comentario + ` <br>
            <small class="texted-muted"> Usuario: ` + miStorage.getItem("keyUsuario") + `  
            
            ` + date + `</small>
            <br> <br>
            <div>
            `
    
            //'' + comment.dateTime +
        document.getElementById("comment").innerHTML += htmlContentToAppend;
        stars = 0; estrellas()
        document.getElementById("inputComment").value = ""; 
    }
    
    function estrellas(){
      document.getElementById("required").innerHTML="";
        if (stars == 1){
            document.getElementById('radio1').checked = true;
            document.getElementById('radio2').checked = false;
            document.getElementById('radio3').checked = false;
            document.getElementById('radio4').checked = false;
            document.getElementById('radio5').checked = false;
        } else {
          document.getElementById("required").innerHTML="";
            if (stars == 2){
                document.getElementById('radio1').checked = true;
                document.getElementById('radio2').checked = true;
                document.getElementById('radio3').checked = false;
                document.getElementById('radio4').checked = false;
                document.getElementById('radio5').checked = false;
            } else {
              document.getElementById("required").innerHTML="";
                if (stars == 3){
                    document.getElementById('radio1').checked = true;
                    document.getElementById('radio2').checked = true;
                    document.getElementById('radio3').checked = true;
                    document.getElementById('radio4').checked = false;
                    document.getElementById('radio5').checked = false;
                } else {
                  document.getElementById("required").innerHTML="";
                    if (stars == 4){
                        document.getElementById('radio1').checked = true;
                        document.getElementById('radio2').checked = true;
                        document.getElementById('radio3').checked = true;
                        document.getElementById('radio4').checked = true;
                        document.getElementById('radio5').checked = false;
                    } else {
                      document.getElementById("required").innerHTML="";
                        if (stars == 5){
                            document.getElementById('radio1').checked = true;
                            document.getElementById('radio2').checked = true;
                            document.getElementById('radio3').checked = true;
                            document.getElementById('radio4').checked = true;
                            document.getElementById('radio5').checked = true;
                        } else {
                            document.getElementById('radio1').checked = false;
                            document.getElementById('radio2').checked = false;
                            document.getElementById('radio3').checked = false;
                            document.getElementById('radio4').checked = false;
                            document.getElementById('radio5').checked = false;
                        }
                    }
                }
            }
        }
    } 
    
    document.getElementById('radio1').addEventListener("click", function() {
      stars = 5;
      estrellas();
  });
  
  document.getElementById('radio2').addEventListener("click", function() {
      stars = 4;
      estrellas();
  });
  
  document.getElementById('radio3').addEventListener("click", function() {
      stars = 3;
      alert("clickestrellas")
      alert(stars);
      estrellas();
  });
  
  document.getElementById('radio4').addEventListener("click", function() {
      stars = 2;
      estrellas();
  });
  
  document.getElementById('radio5').addEventListener("click", function() {
      stars = 1;
      estrellas();
  });