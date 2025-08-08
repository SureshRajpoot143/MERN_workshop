//student={name:"ssr",
//marks:{
    // "science":30,
     //"maths":40 },
     //"rollno":12345
//}



//output:==>{name:"praveen",
//marks:{
// "science":30,
// "maths":40 },
//"rollno":12345
//}

let student={name:"praveen",marks:{science:30,maths:40},rollno:12345};
let output={...student,marks:{...student.marks}};
console.log(output);
