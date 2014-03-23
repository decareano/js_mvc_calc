var app = app || {};

app.DisplayView = (function(){
    'use strict';

    /**
     * Calculator display.
     *
     * @param el
     * @param {app.Calculator} model
     * @constructor
     */
    function DisplayView( el ) {

        this.el = el;
        this.initEvents();
    }

    DisplayView.prototype.initEvents = function() {
        var self = this;

        app.pubSub.subscribe('model/result', function (event, value) {
            self.onResultChange(value);
        });
    }

    /**
     * Handle change of model result value
     *
     */
    DisplayView.prototype.onResultChange = function (value) {

        this.el.value = value;
    };

    return DisplayView;

})();