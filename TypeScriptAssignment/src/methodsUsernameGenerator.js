"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var defaultInputField_1 = require("./defaultInputField");
var MethodsUsernameGenerator = /** @class */ (function (_super) {
    __extends(UsernameGenerator, _super);
    //Konstruktor
    function UsernameGenerator(int1, int2) {
        var _this = _super.call(this) || this;
        _this.int1 = int1;
        _this.int2 = int2;
        _this.addInput();
        return _this;
    }
    ;
    //Methoden
    UsernameGenerator.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    UsernameGenerator.prototype.addInput = function () {
        console.log("username generated");
        return this.int1 + this.int2 + this.getRandomInt(1, 9);
    };
    return UsernameGenerator;
}(defaultInputField_1.DefaultInputField));
exports.UsernameGenerator = MethodsUsernameGenerator;
