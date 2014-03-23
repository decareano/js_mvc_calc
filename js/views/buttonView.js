var app = app || {};

app.ButtonView = (function(){
    'use strict';

    /**
     * Button view.
     *
     * @param el
     * @param {app.Button} model
     * @constructor
     */
    function ButtonView(el, model) {

        this.el = el;
        this.model = model;
        this.initEvents();
    }

    ButtonView.prototype.initEvents = function() {
        var self = this;

        app.domUtils.click(this.el, function () {
            self.onClick();
        });
    }

    /**
     * Handle button click
     *
     */
    ButtonView.prototype.onClick = function () {

        app.pubSub.publish('button/press', this.model);
    };

    return ButtonView;

})();