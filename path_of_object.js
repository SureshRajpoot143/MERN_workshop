//let object={a:{b:{c}}}
//path =[a,b,c]


let object={a:{b:{c:42}}};
let path=['a','b','c'];
let value = path.reduce((obj, key) => obj && obj[key], object);
console.log(value); 


