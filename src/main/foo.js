"use strict";

var foo = (function () {

    var foo = function () {
        return "bar";
    };


    return {
        foo: foo,
    };

}());