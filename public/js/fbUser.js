/**
 * Created by agreen on 5/29/15.
 */

define(['constants'], function(constants) {
    return {
        profileId   : null,
        firstName   : null,
        lastName    : null,
        email       : null,
        accessToken : null,
        profileUrl  : null,
        gender      : null,
        locale      : null,
        timezone    : null,
        updatedTime : null,

        mapProperty: function(property, value) {
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
        },

        setProperties: function(info, isFbHash) {
            if (isFbHash) {
                for(var key in info) {
                    if (key in constants.fbUserHash) {
                        this.mapProperty(constants.fbUserHash[key], info[key]);
                    }
                }
            }
        }
    }
});