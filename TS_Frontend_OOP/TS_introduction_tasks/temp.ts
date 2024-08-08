interface ClothingItem {
  id: number;
  name: string;
  price: number;
  sizes: SizeAndQuantity[];
  quantity: number; // This is calculated dynamically
}
type SizeAndQuantity = {
  size: string;
  quantity: number;
}
interface QuantityCalculator {
  (array: SizeAndQuantity[]): number;
}
const shirt: ClothingItem = {
  id: 1,
  name: 'Shirt',
  price: 19.99,
  get quantity() {
    return this.sizes.reduce((sum, item) => sum + item.quantity, 0);
  },
  sizes: [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 3 }]
}
function countItemsBySize(items: SizeAndQuantity[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

console.log(shirt);
console.log('Sizes array:', shirt.sizes);
console.log('Total quantity:', countItemsBySize(shirt.sizes));
console.log('Total quantity using dynamic property:', shirt.quantity);

