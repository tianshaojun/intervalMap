const person = {name:"yd"};
Object.defineProperty(person,"age",{value:21});
person.age = 18;
console.log(person);
console.log(Object.keys(person));