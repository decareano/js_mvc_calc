var app = app || {};


app.Button = (function () {

    Button.DIGIT = 'digit';
    Button.OPERATION = 'operation';
    Button.CLEAR = 'clear';
    Button.RETURN = 'return';

    /**
     * Button model with invariant value
     *
     * @param type - type of the button
     * @param value - digit, operation or action name
     * @constructor
     */
    function Button(type, value) {
        this.type = type;
        this.value = value;
    }

    Button.prototype.getType = function () {
        return this.type;
    }

    Button.prototype.getValue = function () {
        return this.value;
    }

    Button.factory = function (type, value) {

        if (type === Button.DIGIT) {
            return new Button(type, parseInt(value, 10));
        }

        if (type === Button.CLEAR || type === Button.RETURN) {
            return new Button(type, type);
        }

        if (type === Button.OPERATION) {
            return new Button(type, app.operations.factory(value));
        }

    }

    return Button;

})();