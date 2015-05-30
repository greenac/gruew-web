/**
 * Created by agreen on 4/3/15.
 */

define(['jquery', 'bootstrap', 'facebook'], function($, bootstrap, FB) {
    var App = {
        names: [
            'Amber Costello',
            'Alana Garvey',
            'Karen Brisco',
            'Khin Htwe',
            'Janette Santos'
        ],

        colors: [
            '#0099CC',
            '#337D6E',
            '#7A52CC',
            '#D14719'
        ],

        elements: {
            nameButton: $('.name'),
            myButton: $('.myButton')
        },

        params: {
            fadeTime: 500
        },

        start: function () {
            console.log("starting the app!!");
            var that = this;
            this.elements.nameButton.html('<h1>My Name is: <small>Andre Green</small></h1>');

            this.elements.nameButton.on('click', function() {
                that.printMessage('#messageHeader');
            });

            this.elements.myButton.on('click', function() {
                that.printMessage('#message2Header');
            });

            this.elements.myButton.focus(function() {
                console.log('focus Luke, focus');
                $(this).css({border: '1px solid greeen'});
                that.printMessage('#message2Header');
            });
        },

        printMessage: function(element) {
            var name = this.getName();
            this.setColors();
            $(element).removeClass('selectedHeader').addClass('unselectedHeader');
            var that = this;
            this.fadeOut(element, function() {
                $(element).html('Hi ' + name + ' have a good day!');
                $(element).removeClass('unselectedHeader').addClass('selectedHeader');
                that.fadeIn(element, null);
            });
        },
        
        getName: function() {
            var name = this.randomValue(this.names);
            console.log('we have chosen...', name);
            return name;
        },

        fadeIn: function(element, completion) {
            $(element).fadeIn(this.params.fadeTime, function() {
                console.log('done fading in');
                if (completion) {
                    completion(element);
                }
            });
        },

        fadeOut: function(element, completion) {
            $(element).fadeOut(this.params.fadeTime, function() {
                console.log('done fading out');
                if (completion) {
                    completion(element);
                }
            });
        },

        setColors: function() {
            $('.selectedHeader').css({color:this.randomValue(this.colors)});
            $('.unselectedHeader').css({color:this.randomValue(this.colors)});
        },

        randomValue: function(collection) {
            var index = Math.floor((Math.random() * collection.length));
            return collection[index];
        },
    };

    return App;
});