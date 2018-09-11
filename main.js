var myFirstProgram = /** @class */ (function () {
    function myFirstProgram() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.printArg(argArray);
    }
    myFirstProgram.prototype.printArg = function (argArray) {
        console.log(argArray);
    };
    myFirstProgram.prototype.runFirst = function (callback) {
        console.log("This method runs first ...");
    };
    myFirstProgram.prototype.runLast = function () {
        console.log("This methods runs last!!!");
    };
    return myFirstProgram;
}());
var newInstance = new myFirstProgram("a", "b", "c");
