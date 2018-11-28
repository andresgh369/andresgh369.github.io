(  function() {
    var app = {
        dogFilter: document.getElementById( "dogFilter" ),
        perroList: [],
    }

    var loadData = function() {
        var xhttp = new XMLHttpRequest();
        var url = "andresgh369.pythonanywhere.com/perro/";

        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                displayPerros( data.results );
                app.perroList = data.results;
            }
        }
        xhttp.open( 'GET', url, true );
        xhttp.send();
    }

    var displayPerros = function( dogs ) {
        var dogsContainer = document.getElementById( "dogsContainer");
        dogsContainer.innerHTML = "";

        for( let dog of dogs ) {
            var perroContainer = document.createElement( "div" );
            var txtPerroName = document.createElement( "h3" );
            var imgPerro = document.createElement( "img" );
            var txtPerroDescription = document.createElement( "p" );
            var txtPerroEstado = document.createElement( "p" );
            perroContainer.className = "bearContainer";
            txtPerroName.innerHTML = dog.name;
            imgPerro.src = dog.imageUrl;
            imgPerro.alt = dog.name;
            txtPerroDescription.innerHTML = "<b>Des: </b>"+ dog.description;
            txtPerroEstado.innerHTML = "<b>Estado: </b>" + dog.estado;
            // Agregar los hijos correspondientes
            perroContainer.appendChild( txtPerroName );
            perroContainer.appendChild( imgPerro );
            perroContainer.appendChild( txtPerroDescription );
            perroContainer.appendChild( txtPerroEstado );
            // Agregar el contenedor al documento
            dogsContainer.appendChild( perroContainer );
        }
    }

    app.dogFilter.addEventListener( "change", function( e ) {
        var filteredPerros = app.perroList.filter( function( dog ) {
            if( dog.estado == app.dogFilter.value ) {
                return dog;
            }
        } );
        displayPerros( filteredPerros );
    } );
    
    loadData();
} ) ( );
