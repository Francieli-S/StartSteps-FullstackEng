"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Printer {
    constructor(val) {
        this.value = val;
        this._privateValue = 20;
        this._protectedValue = 30;
    }
    doPrint() {
        console.log('doPrint() from PARENT.');
    }
}
class ChildPrinper extends Printer {
    doPrint() {
        // this overrides the doPrint from parent
        super.doPrint();
        console.log('doPrint() from CHILD');
        console.log(this._protectedValue); // protected in the parent but accessable in the child
        // console.log(this._privateValue); // private in the parent NOT accessable in the child
    }
    doSomething() {
        console.log('doSomething() ONLY FROM THE CHILD');
    }
}
const printerFromParent = new Printer('printer');
const printerFromChild = new ChildPrinper('printer');
printerFromParent.doPrint();
printerFromChild.doPrint();
printerFromChild.doSomething();
