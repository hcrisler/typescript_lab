"use strict";
let mtn = {
    name: 'Kilimanjaro',
    height: 20000,
};
//this declares an empty array of mountains of type Mountain
const mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
function findNameOfTallestMountain(mtns) {
    let nameOfTallestMountain = "";
    let tallestHeight = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
const products = [
    { name: 'Pen', price: 4.99 },
    { name: 'Notebook', price: 12.99 },
    { name: 'Leather Pouch', price: 24.99 },
];
function calcAveProductPrice(avePrice) {
    let totalSum = 0;
    for (const average of avePrice) {
        totalSum += average.price;
    }
    let totalAve = totalSum / products.length;
    return totalAve;
}
let totalAve = calcAveProductPrice(products);
console.log(totalAve);
const inventory = [
    { product: { name: 'Motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'Sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(items) {
    let total = 0;
    for (const item of items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
let inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);
