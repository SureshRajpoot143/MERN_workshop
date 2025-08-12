//destructring
// const arr = [1, 2, 3, 4];
// const arr={"one": "hello", "two":"men", "three": 3};
// // const one = arr[0];
// const{one, two, three} = arr;
// console.log(one);
// console.log(two);
// console.log(three);

// const hello=[1,2]
// const[d,  ,f] = hello;
// console.log(f);
// console.log(d);

// const obj={"student":"RBMI",
//     "marks":{
//         "math": 90,
//         "english": 85,
//         "science": 95   
//     },
//     "location":"bareilly"
// };
// const{student, marks:{math, english, science}, location} = obj;
// console.log(student);
// console.log(math);
// console.log(english);
// console.log(science);   
// console.log("location =",location);     



// const fun=({...ages})=> { ///rest operator
//     console.log(ages);
// }
// fun({ages: 25,"age1": 30});

//spread operator ...
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];     
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);


// const arr1 = [1, 2, 3];
// console.log(...arr1);


//shallow copy and deep copy


// const arr= [1, 2, 3,4]

// // const copy=arr; //shallow copy
// const copy=[...arr]
// console.log(copy);
// copy[0]=9
// console.log(arr);
// console.log(copy);

const aar1={1:"r",2:"s",3:{"td":"gt"}};
const copy1={...aar1};
console.log(copy1);
copy1[3]="three";
console.log(copy1);
console.log(aar1);


  




