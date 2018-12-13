(  function() {
    var app = {
        ProductoList: [],
    }


    var loadData = function() {
        var xhttp = new XMLHttpRequest();
        var url = "http://andresgh369.pythonanywhere.com/producto/";

        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                var data = JSON.parse( this.responseText );
                app.ProductoList = data.results;
                displayPerros( data.results );
                localStorage.setItem('productos',JSON.stringify(data));
            }
        }
        xhttp.open( 'GET', url, true );
        xhttp.send();
    }


    var displayPerros = function( prods ) {

        if(navigator.onLine){
        }else
        {
            if(localStorage.getItem('productos')!=null){
                console.log(productos.length)
            }
        }
        for( let prod of prods ) {

                $('#dogsContainer').append(
                    '<div class="bearContainer">'+
                        '<p>Nombre: '+prod.name+'</p>'+
                        '<p>Presupuesto: '+prod.costop+'</p>'+
                        '<p>Costo: '+prod.costor+'</p>'+
                        '<p>Tienda: '+prod.tienda+'</p>'+
                        '<p>Notas: '+prod.notas+'</p>'+
                        '<p><input onclick="comprar('+prod.id+')" type="submit" id="comprar" name="submit" value="Comprado" class="boton"></p>'+
                    '</div>'
                    )
        }
    }
    loadData();
} ) ( );

//function cambiarEstado(number){
  //  var xhr = new XMLHttpRequest();
    //var url = "http://andresgh369.pythonanywhere.com/perro/"+number+"/";
//    var data = { "estado":"adoptado"};

  //  xhr.open("PATCH", url, true);
   // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
   /// xhr.onload = function () {
    //    var perros = JSON.parse(xhr.responseText);
   // }
   // xhr.send(JSON.stringify(data));
   // location.reload();
//}

function agregarprod(){
    var nombree = document.getElementById("nombreprod");
    var presu = document.getElementById("pesuprod");
    var costo = document.getElementById("costoprod");
    var tienda = document.getElementById("tiendaprod");
    var notas = document.getElementById("notasprod");

    var nombre = nombree.value;
    var presupuesto = presu.value;
    var costoprod = costo.value;
    var tiendaprod = tienda.value;
    var notasprod = notas.value;

    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/producto/";

    var data = {};
    data.name = nombre;
    data.costop = presupuesto;
    data.costor = costoprod;
    data.tienda = tiendaprod;
    data.notas = notasprod;

    
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var productos = JSON.parse(xhr.responseText);
    }
    xhr.send(JSON.stringify(data));
    location.reload();
}

function comprar(number){
    var url = "http://127.0.0.1:8000/producto/"+number+"/";
    var xhr = new XMLHttpRequest();

    xhr.open("DELETE", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var productos = JSON.parse(xhr.responseText);
    }
    xhr.send(JSON.stringify(null));
    location.reload();
}

//function calculos(){
  //  var presupuesto = 0;
  //  var costo = 0;
  //      var app = {
   //         ProductoList: [],
   //     }
    
    
    //    var loadData = function() {
     //       var xhttp = new XMLHttpRequest();
      //      var url = "http://127.0.0.1:8000/producto/";
    
     //       xhttp.onreadystatechange = function() {
     //           if( this.readyState == 4 && this.status == 200 ){
     //               var data = JSON.parse( this.responseText );
     //               app.ProductoList = data.results;
     //               displayPerros( data.results );
     //               localStorage.setItem('productos',JSON.stringify(data));
      //          }
      //      }
      //      xhttp.open( 'GET', url, true );
      //      xhttp.send();
      //  }
    
    
       // var displayPerros = function( prods ) {
    
  ///          if(navigator.onLine){
    //        }else
     //       {
       //         if(localStorage.getItem('productos')!=null){
        //            console.log(productos.length)
         //       }
          //  }
          ///  for( let prod of prods ) {
         //       let basedatos = [{
          //          id: prod.id,
           //         nombre: prod.name,
          //          presupuesto: prod.costop,
          //          costo: prod.costor,
          //          tienda: prod.tienda,
          //          notas: prod.notas
          //      }];

          //      let producto = basedatos.filter(function(itembasedatos){
          //          return itembasedatos['id'] == prod;
          //      });
          //      presupuesto = presupuesto + producto[0]['presupuesto'];
          //      costo = costo + producto[0]['costo'];
          //  }
      //  }
      //  loadData();

       // $('#costocontainer').append(
        //    '<div class="bearContainer">'+
         //       '<p>Presupuesto: '+presupuesto+'</p>'+
          //      '<p>Costo total: '+costo+'</p>'+
         ///   '</div>'
       // )
   // }
