/**
 * Created by agreen on 5/28/15.
 */

define(['facebook', 'fbHandler'], function(FB, fbHandler) {
    FB.init({
        appId       : '1442933456011852',
        version     : 'v2.3'
    });

    FB.getLoginStatus(function(response) {
        console.log('FB::getLoginStatus');
        console.log(response);
        fbHandler.checkLoginStatus(response);
    });
});
