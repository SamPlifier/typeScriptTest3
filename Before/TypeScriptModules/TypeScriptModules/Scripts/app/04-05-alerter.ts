/// <reference path="04-05-dataservice.ts" />
/// <reference path="../../../../../toastr.d.ts" />

interface IAlerter {
    name: string;
    showMessage(): void;
}

var dataservice = new DataService();

class Alerter implements IAlerter {
    name = 'Sam';
    showMessage() {
        var msg = dataservice.getMessage();
        toastr.info(`${msg} ${this.name}`);
    }
}
