// const obj = {number:10};
// const objCopy = {...obj};
// objCopy.number = 12;
// console.log(obj);  //{number:10}
// console.log(objCopy);  //{number:12}


const value = {number:10};
let number = 2;
const multiply = (x = {...value}, y = number) => {
    y++;
    console.log((x.number *= y));
};

multiply();  //30
multiply();  //30
multiply(value, number);  //30
multiply(value, number);  //90