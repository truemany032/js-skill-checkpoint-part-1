// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let tempIndex = 0;
for (let i = 0; inventory[i]; i++)
{
  if (inventory[i].quantity < inventory[tempIndex].quantity)
    tempIndex = i;
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory[tempIndex].name} ซึ่งมี ${inventory[tempIndex].quantity} ชิ้น`)