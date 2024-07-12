"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const top = {
    id: 1,
    name: 'Top',
    price: 19.99,
    get quantity() {
        return this.sizes.reduce((sum, item) => sum + item.quantity, 0);
    },
    sizes: [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 4 }],
};
function countItemsBySize(items) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
}
console.log(top);
console.log('Sizes array:', top.sizes);
console.log('Total quantity:', countItemsBySize(top.sizes));
console.log('Total quantity using dynamic property:', top.quantity);
