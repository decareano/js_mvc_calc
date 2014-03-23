var app = app || {};

app.CalcView = (function(){
    'use strict';

    function CalcView(calcEl){

        this.el = calcEl;

        this.buttons = [];

        this.init();
    }

    CalcView.prototype.init = function(){

        var
            displayEl = app.domUtils.getByTag('input', this.el)[0],
            buttonsEls = app.domUtils.getByTag('button', this.el);

        this.displayView = new app.DisplayView( displayEl );

        this.createButtons(buttonsEls);
    }

    CalcView.prototype.createButtons = function(buttonEls){
        var i, btnView, btnModel, type, value;

        for (i = 0; i < buttonEls.length; i++){

            type = buttonEls[i].getAttribute('data-type');
            value = buttonEls[i].getAttribute('data-value');

            btnModel = app.Button.factory(type, value);

            btnView = new app.ButtonView(buttonEls[i], btnModel);

            this.buttons.push(btnView);
        }

    };

    return CalcView;

})();