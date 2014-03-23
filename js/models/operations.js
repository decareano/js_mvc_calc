var app = app || {};

/*
 Operations are implemented using strategy pattern.

 Actual implementation classes are not available from outside. Use factory method to create specified implementation.
 */
app.operations = (function (ops) {

    ops.NOOP = '';
    ops.MULTIPLY = 'multiply';
    ops.MINUS = 'minus';
    ops.PLUS = 'plus';


    /**
     * Factory method
     * @param op
     * @returns {Operation} - concrete operation implementation
     */
    ops.factory = function(op){

        if (op === ops.MULTIPLY){
            return new MultiplyOperation();
        }

        if (op === ops.MINUS){
            return new MinusOperation();
        }

        if (op === ops.PLUS){
            return new PlusOperation();
        }

        return new Operation();
    }


    //base class
    function Operation(type) {
        this.type = type || ops.NOOP;
    }

    Operation.prototype.getType = function () {
        return this.type;
    }

    Operation.prototype.equals = function (op) {
        return op && op.getType() === this.getType();
    }

    // +
    function PlusOperation() {
        Operation.call(this, ops.PLUS);
    }

    PlusOperation.prototype = new Operation();

    PlusOperation.prototype.execute = function (a, b) {
        return a + b;
    }

    // -
    function MinusOperation() {
        Operation.call(this, ops.PLUS);
    }

    MinusOperation.prototype = new Operation();

    MinusOperation.prototype.execute = function (a, b) {
        return a - b;
    }

    // *
    function MultiplyOperation() {
        Operation.call(this, ops.PLUS);
    }

    MultiplyOperation.prototype = new Operation();

    MultiplyOperation.prototype.execute = function (a, b) {
        return a * b;
    }

    return ops;

})({});