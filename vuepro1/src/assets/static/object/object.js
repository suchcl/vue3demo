// // 对象的学习
// // 对象字面亮的形式创建对象
// const person = {
//     fullname: "Nicholas Zakas",
//     "age": 18,
//     " ": "e2e",
//     for: "Programmer",
//     play: function(){
//         console.log("play games");
//     },
//     name: {
//         firstname: "Nicholas",
//         lastname: "Zakas"
//     }
// };

// console.log(person[" "]); // e2e


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const p = new Person("Nicholas Zakas", 16);
// console.log(p.name); // Nicholas Zakas
// console.log(p.age); // 16

// const book = Object.create({
//     name: "Javascript高级程序设计",
//     price: 79
// });
// console.log(book.name);

// 原始对象
// const obj = {
//     name: "Nicholas Zakas",
//     age: 18
// };

// lib.fn(Object.create(obj)); // 以这种方式,可以访问到原始对象obj的属性,也可以设置新的属性,但是设置的新属性只是修改继承自obj的新对象的属性,并不会修改obj本身


// const book = {
//     name: "Javascript高级程序设计",
//     author: "Nicholas Zakas",
//     price: 119
// };
// console.log(delete book.price); // true  删除了price属性
// console.log(delete book.toString); // true 删除了一个继承的属性,它不能删除继承属性,无影响 true
// console.log(delete book.priter); // true  删除了一个不存在的属性
// console.log(delete 18); // true 删除了一个非属性访问表达式

const person = {
    name: "Nicholas Zakas",
    age: 18,
    height: 1.89
};
Object.defineProperty(person,"height",{
    configurable: false
});

console.log(delete person.height); // false  将height属性设置成了不可配置了