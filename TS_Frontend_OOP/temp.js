"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shirt = {
    id: 1,
    name: 'Shirt',
    price: 19.99,
    get quantity() {
        return this.sizes.reduce((sum, item) => sum + item.quantity, 0);
    },
    sizes: [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 3 }]
};
function countItemsBySize(items) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
}
console.log(shirt);
console.log('Sizes array:', shirt.sizes);
console.log('Total quantity:', countItemsBySize(shirt.sizes));
console.log('Total quantity using dynamic property:', shirt.quantity);
