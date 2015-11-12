"use strict";

describe("Counter tests", function () {

    beforeEach(function() {
        console.log("before");
    });

    afterEach(function() {
       console.log("after");
    });

    it("Foo gives bar", function () {
        // Arrange


        // Act
        var result = foo.foo();

        // Assert
        expect(result).toBe("bar");
    });


});
