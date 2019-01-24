/// <reference path="04-05-dataservice.ts" />
/// <reference path="../../../../../toastr.d.ts" />
var dataservice = new DataService();
var Alerter = /** @class */ (function () {
    function Alerter() {
        this.name = 'Sam';
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataservice.getMessage();
        toastr.info(msg + " " + this.name);
    };
    return Alerter;
}());
