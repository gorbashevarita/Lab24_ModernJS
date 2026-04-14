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

const product = {
    name: "кулич", 
    price: "200p",
    category: "выпечка", 
    inStock: "да"
}
const {name, price, category, inStock} = product;
console.log(name, price, category, inStock);

function printProduct(product) {
    console.log(`name: ${name}`);
    console.log(`price: ${price}`);
    console.log(`category: ${category}`);
    console.log(`inStock: ${inStock}`);
}
printProduct(product);