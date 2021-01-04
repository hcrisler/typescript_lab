//part one
interface Mountain {
    name: string;
    height: number;
}

let mtn: Mountain = {
    name: 'Kilimanjaro',
    height: 20000,
}

//this declares an empty array of mountains of type Mountain
const mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];

function findNameOfTallestMountain(mtns: Mountain[]): string {
    let nameOfTallestMountain: string = "";
    let tallestHeight: number = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

//part two
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'Pen', price: 4.99 },
    { name: 'Notebook', price: 12.99 },
    { name: 'Leather Pouch', price: 24.99 },
];

function calcAveProductPrice(avePrice: Product[]): number {
    let totalSum: number = 0;
    for (const average of avePrice) {
        totalSum += average.price;
    }
    let totalAve: number = totalSum / products.length;
    return totalAve;
}
let totalAve: number = calcAveProductPrice(products);
console.log(totalAve);

//part three
interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: { name: 'Motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'Sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 },
];

function calcInventoryValue(items: InventoryItem[]): number {
    let total: number = 0;
    for (const item of items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
let inventoryTotal: number = calcInventoryValue(inventory);
console.log(inventoryTotal);