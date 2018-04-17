var app = function () {
    'use strict';

    var
        calcEl = app.domUtils.getById('calc'),

        model = new app.Calculator(),

        controller = new app.Controller(model);


    new app.CalcView(calcEl);

    //let's go!
    controller.start();

};