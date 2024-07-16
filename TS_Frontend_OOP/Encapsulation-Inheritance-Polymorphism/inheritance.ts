class Printer {
  value: string
  private _privateValue: number
  protected _protectedValue: number

  constructor(val: string) {
    this.value = val
    this._privateValue = 20
    this._protectedValue = 30
  }

  doPrint(): void {
    console.log('doPrint() from PARENT.');
  }
}

class ChildPrinper extends Printer {
  doPrint(): void { // do not use arrow function here
    // this overrides the doPrint from parent
    super.doPrint()
    console.log('doPrint() from CHILD');
    console.log(this._protectedValue); // protected in the parent but accessable in the child
    // console.log(this._privateValue); // private in the parent NOT accessable in the child
  }

  doSomething(): void {
    console.log('doSomething() ONLY FROM THE CHILD');
  }
}

const printerFromParent = new Printer('printer')
const printerFromChild = new ChildPrinper('printer')

printerFromParent.doPrint();
printerFromChild.doPrint();
printerFromChild.doSomething();
