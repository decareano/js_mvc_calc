var app = app || {};

app.Calculator = (function () {
    'use strict';

    var MAX_LIMIT = 99999999,
        DIGIT = 0,
        OPERATION = 1,
        RETURN = 2;

    /**
     * Calculator model responsible for state and logic
     *
     * @constructor
     */
    function Calculator() {
        this.result = NaN;
        this.oper1 = this.oper2 = 0;
        this.operation = null;
        this.lastInput = DIGIT;
    }

    Calculator.prototype.addDigit = function (digit) {
        if (this.lastInput === OPERATION){
            this.oper1 = this.result;
            this.oper2 = digit;
        }
        else if (this.lastInput === RETURN){
            this.result = 0;
            this.oper1 = 0;
            this.oper2 = digit;
            this.operation = null;
        }
        else{
            this.oper2 = parseInt(this.result +''+ digit, 10);

        }
        this.setResult( this.oper2 );

        this.lastInput = DIGIT;
    };

    Calculator.prototype.applyOperaton = function (operation) {
        if (this.lastInput === DIGIT){
            this.calculate();
        }
        this.operation = operation;
        this.lastInput = OPERATION;
    };

    Calculator.prototype.calculate = function () {
        if (this.operation){

            this.oper2 = this.operation.execute(this.oper1, this.oper2);

            this.setResult( this.oper2 );
            this.oper1 = 0;
            this.operation = null
            this.lastInput = RETURN;
        }
    };

    Calculator.prototype.clear = function () {
        this.setResult(0);
        this.oper1 = this.oper2 = 0;
        this.operation = null
        this.lastInput = DIGIT;
    };

    Calculator.prototype.getResult = function () {
        return this.result;
    };

    Calculator.prototype.getOperation = function () {
        return this.operation;
    };

    Calculator.prototype.setResult = function (value) {
        value = parseInt(value,10);
        if (Math.abs(value) > MAX_LIMIT) return;

        this.result = value;
        app.pubSub.publish('model/result', this.result);
    };

    return Calculator;

})
    ();