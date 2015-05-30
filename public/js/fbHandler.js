/**
 * Created by agreen on 5/29/15.
 */

define(['eventTags', 'facebook'], function(eventTags, FB) {
   var fbHandler = {
       accessToken: null,

       permissions: ['public_profile', 'email'],

       permissionsString: function() {
           var pString = '';
           for (var i=0; i < this.permissions.length; i++) {
               pString += this.permissions[i];
               if (i !== this.permissions.length - 1) {
                   pString += ',';
               }
           }
           console.log('permissions string is: ', pString);
           return pString;
       },

       checkLoginStatus: function(response) {
           if (response.status === 'connected') {
               this.getUserInfo();
           } else if (response.status === 'not_authorized') {
               this.showLoginPopup();
           } else {
              this.showLoginPopup();
           }
       },

       showLoginPopup: function() {
           FB.login(function(response) {
               console.log('facebook login response: ', response);
               this.checkLoginStatus(response);
           }, {scope: this.permissionsString()});
       },

       getUserInfo: function() {
           FB.api('/me', function(response) {
              console.log('user response', JSON.stringify(response));
           });
       }
   };

    return fbHandler;
});
