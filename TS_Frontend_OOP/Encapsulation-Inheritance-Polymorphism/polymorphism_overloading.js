"use strict";
class MathOperation {
    add(a, b) {
        if (b) {
            return a + b;
        }
        return a;
    }
}
const mathObj = new MathOperation();
// same method, different behaviour(implementation) ===> polymorphism
mathObj.add(1, 2);
mathObj.add('Hello ', 'world.');
mathObj.add(true);
