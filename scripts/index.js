(  function() {
    var app = {
        arregloLista: [],
    }


    var loadData = function() {
        var xhttp = new XMLHttpRequest();
        var url = "http://andresgh369.pythonanywhere.com/lista/";

        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                var data = JSON.parse( this.responseText );
                app.arregloLista = data.results;
                displayPerros( data.results );
                localStorage.setItem('listas',JSON.stringify(data));
            }
        }
        xhttp.open( 'GET', url, true );
        xhttp.send();
    }


    var displayPerros = function( listas ) {

        if(navigator.onLine){
        }else
        {
            if(localStorage.getItem('listas')!=null){
                console.log(listas.length)
            }
        }

        for( let lista of listas ) {
                $('#listascont').append(
                    '<div class="container">'+
                        '<a href="gallery.html" ><h1>'+lista.name+'</h1></a>'+
                    '</div>'
            )
        }
    }
    
    loadData();
} ) ( );

//function agregarlista(){
  //  $('#listascont').append(
    //    '<div class="bearContainer">'+
      //      '<h1>sadasdasd</h1>'+
        //    '<p>descripcion: adsadasd</p>'+
          //  '<p>estado: asdasdassad</p>'+
       // '</div>'
   // )
//}


function agregarlista(){
    var nombree = document.getElementById("nombrelista");
    var nombre = nombree.value;
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/lista/";

    var data = { "name":nombre};
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var listas = JSON.parse(xhr.responseText);
    }
    xhr.send(JSON.stringify(data));
    location.reload();
}

