/*FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

{
    status: 'connected',
    authResponse: {
        accessToken : '...',
        expiresIn : '...',
        signedRequest : '...',
        userID : '...'
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
*/
  FB.getLoginStatus(function (response) {
    console.log(response);
    if (response.status === 'connected') {
       // updatePermissions();
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token 
        // and signed request each expire
        FB.login(function (response) {
            // handle the response
        }, {scope: 'publish_actions'});
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
    } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook, 
        // but has not authenticated your app
    } else {
        FB.login(function (response) {
            // handle the response
        }, {scope: 'publish_actions'});
    }
});
FB.Event.subscribe('auth.authResponseChange', function (response) {
    // Here we specify what we do with the response anytime this event occurs. 
    if (response.status === 'connected') {
        console.log('status connected',response);
        window.location.replace("https://andresgh369.github.io/iniciar_sesion.html");
        // The response object is returned with a status field that lets the app know the current
        // login status of the person. In this case, we're handling the situation where they 
        // have logged in to the app.
        testPermissions();
    } else if (response.status === 'not_authorized') {
        // In this case, the person is logged into Facebook, but not into the app, so we call
        // FB.login() to prompt them to do so. 
        // In real-life usage, you wouldn't want to immediately prompt someone to login 
        // like this, for two reasons:
        // (1) JavaScript created popup windows are blocked by most browsers unless they 
        // result from direct interaction from people using the app (such as a mouse click)
        // (2) it is a bad experience to be continually prompted to login upon page load.
        FB.login(function (response) {
            // handle the response
        }, {scope: 'publish_actions'});
    } else {
        // In this case, the person is not logged into Facebook, so we call the login() 
        // function to prompt them to do so. Note that at this stage there is no indication
        // of whether they are logged into the app. If they aren't then they'll see the Login
        // dialog right after they log in to Facebook. 
        // The same caveats as above apply to the FB.login() call here.
        FB.login(function (response) {
            // handle the response
        }, {scope: 'publish_actions'});
    }
});
function validarUsuario() {  
    FB.getLoginStatus(function(response) {  
        if(response.status == 'connected') {  
            FB.api('/me', function(response) {  
                alert('Hola ' + response.name);  
            });  
        } else if(response.status == 'not_authorized') {  
            alert('Debes autorizar la app!');  
        } else {  
            alert('Debes ingresar a tu cuenta de Facebook!');  
        }  
    });  
} 
