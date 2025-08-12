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



const fun=({...ages})=> {
    console.log(ages);
}
fun({ages: 25,"age1": 30});






  




