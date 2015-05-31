/**
 * Created by agreen on 5/29/15.
 */

define(['eventTags', 'facebook'], function(eventTags, FB) {
   return {
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

       getLoginStatus: function(callback) {
           FB.getLoginStatus(function(response) {
               console.log('FB::getLoginStatus');
               console.log(response);
               if(callback) {
                   callback(response);
               }
           });
       },

       checkLoginStatus: function(response, callback) {
           if (response.status === 'connected') {
               this.getUserInfo(callback);
           } else if (response.status === 'not_authorized') {
               this.showLoginPopup(callback);
           } else {
              this.showLoginPopup(callback);
           }
       },

       showLoginPopup: function(callback) {
           FB.login(function(response) {
               console.log('facebook login response: ', response);
               this.checkLoginStatus(callback);
           }, {scope: this.permissionsString()});
       },

       getUserInfo: function(fbUser, callback) {
           FB.api('/me', function(response) {
              console.log('user response', JSON.stringify(response));
               if (callback) {
                   callback(response);
               }
           });
       }
   };
});
