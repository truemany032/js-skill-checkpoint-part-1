// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory[inventory.length] = {name: "Orange", price: 20, quantity: 300};

let result = 0;
for (let i = 0; inventory[i]; i++)
  result += inventory[i].price * inventory[i].quantity;
console.log(`มูลค่ารวมของสินค้าทั้งหมดในสต็อก ${result} บาท`);
