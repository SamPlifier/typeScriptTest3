/// <reference path="../../../../../toastr.d.ts" />

interface IRectangle {
    height: number;
    width: number;
    getArea(): number;
}
namespace Shapes {
    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number) {
        }
        getArea() { return this.height * this.width };
    }
}

namespace MyProgram {
    function run () {
        var rect : IRectangle = new Shapes.Rectangle(10,4);
        var area = rect.getArea();
        toastr.info(`Area = ${area}`);
    }
    run();
}
