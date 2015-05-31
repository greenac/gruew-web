/**
 * Created by agreen on 5/29/15.
 */

define(['constants'], function(constants) {
    return function() {
        this.profileId = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.accessToken = null;
        this.profileUrl = null;
        this.gender = null;
        this.locale = null;
        this.timezone = null;
        this.updatedTime = null,

        this.mapProperty = function(property, value) {
            if (property === 'profileId') {
                this.profileId = value;
            } else if (property === 'firstName') {
                this.firstName = value;
            } else if (property === 'lastName') {
                this.lastName = value;
            } else if (property === 'email') {
                this.email = value;
            } else if (property === 'accessToken') {
                this.accessToken = value;
            } else if (property === 'profileUrl') {
                this.profileUrl = value;
            } else if (property === 'gender') {
                this.gender = value;
            } else if (property === 'locale') {
                this.locale = value;
            } else if (property === 'timezone') {
                this.timezone = value;
            } else if (property === 'updatedTime') {
                this.updatedTime = value;
            }
        };

        this.setProperties = function(info) {
            for(var key in info) {
                if (key in constants.fbUserHash) {
                    this.mapProperty(constants.fbUserHash[key], info[key]);
                }
            }
        };
    }
});