var app = app || {};

app.Controller = (function () {
    'use strict';

    /**
     * Controller is responsible for handling user input events.
     *
     * @param {app.Calculator} model
     * @constructor
     */
    function Controller(model) {

        this.model = model;
        this.initEvents();
    }

    Controller.prototype.initEvents = function() {
        var self = this;

        app.pubSub.subscribe('button/press', function (event, button) {

            self.onButtonPress(button);
        });
    };

    /**
     * Handle button press event from ButtonView
     *
     * @param {app.Button} button
     */
    Controller.prototype.onButtonPress = function (button) {

        if (button.getType() === app.Button.DIGIT) {

            this.model.addDigit(button.getValue());
        }
        else if (button.getType() === app.Button.OPERATION) {

            this.model.applyOperaton(button.getValue());
        }
        else if (button.getType() === app.Button.RETURN) {

            this.model.calculate();
        }
        else {

            this.model.clear();
        }
    };


    /**
     * Set model initial state
     */
    Controller.prototype.start = function () {
        this.model.clear();
    };

    return Controller;

})();