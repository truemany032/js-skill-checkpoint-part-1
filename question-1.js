// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo[myTodo.length] = {id: 5, todo: "Walk the dog"};
myTodo[3].todo = "Go to the gym"; 

console.log(`To-do id: ${myTodo[myTodo.length-1].id}, ${myTodo[myTodo.length-1].todo}`)
