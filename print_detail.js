//student={name:"praveen",
//marks:{
    // "science":30,
     //"maths":40 },
     //"rollno":12345
//}



//output:==>{name:"praveen",
//marks:"science":30,
// "maths":40,
//"rollno":12345
//}

let student={name:"praveen",marks:{science:30,maths:40},rollno:12345};
let output={};
for(let key in student){
    if(typeof student[key] === 'object') {
        for(let subKey in student[key]) {
            output[subKey] = student[key][subKey];
        }
    } else {
        output[key] = student[key];
    }
}
console.log(output); 

              