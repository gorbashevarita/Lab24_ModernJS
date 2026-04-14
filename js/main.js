console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];
// const colors1 = colors[0];
// const colors2 = colors[1];
// console.log(colors1, colors2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса", 
//     age: 25, 
//     city: "Москва",
// }

// const {name, age, city} = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Russia" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({name, age, city}) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "кулич", 
//     price: "200p",
//     category: "выпечка", 
//     inStock: "да"
// }
// const {name, price, category, inStock} = product;
// console.log(name, price, category, inStock);

// function printProduct(product) {
//     console.log(`name: ${name}`);
//     console.log(`price: ${price}`);
//     console.log(`category: ${category}`);
//     console.log(`inStock: ${inStock}`);
// }
// printProduct(product);









// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединенный массив: ", combined);

// const copy = [...arr1];
// console.log("Копия массива: ", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив: ", extended);

// console.log("Spread для объектов");

// console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Sum 1, 2, 3: ", sum(1, 2, 3));
// console.log("Sum 1, 2, 3, 4, 5: ", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const combined = [...array1, ...array2];
// console.log(combined);

// function findMax(...rest) {
//     return Math.max(...rest)
// }
// findMax(1, 2, 3, 4, 80, 5)
// console.log(findMax(1, 2, 3, 4, 80, 5));

// const object1 = {
//     name: "Ruta", 
//     age: 18
// };
// const object2 = {
//     city: "Volzhski", 
//     hobbi: "read"
// };
// const object3 = {...object1, ...object2};
// console.log(object3);







// import {greet, add, PI} from "./utils.js";
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 = ", add(5, 3));
// console.log("Значение PI: ", PI);

// import {multiply as умножить } from "./utils.js";
// console.log("4 * 7 = ", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение: ", Utils.multiply(3, 9));

import { square, cube, E } from "./math.js";
console.log(square(3));
console.log(cube(3));
console.log(E);