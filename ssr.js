// let age=30;
// if(age<18){
//     console.log("print")
// }
// else if(age<35){
//     console.log("not print")
// }
// else{
//     console.log("print")
// } 



// let age={29,50,48}
// console.log(typeof age)

// let age=30;
// let num="10";
// console.log(num-age);

//type conversion
  


// let age=30;
// let num="10";
// console.log(num+age);


//explicit

// let age=30;

// console.log(typeof parseInt(age))
// console.log(typeof toString(age))

//method of string
// let name="saymyname";
// console.log(name.length)
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.trim())
// console.log(name.charAt(4))
// console.log(name.indexOf("s"))
// console.log(name.lastIndexOf("s"))
// console.log(name.slice(1,6))
// console.log(name.substring(1,4))
// console.log(name.substr(1,5))
// console.log(name.replace("s","a"))
// console.log(name.replaceAll("m","y"))


// let name="suresh rajpoot"
// for(let i=name.length;i>=0;i--){
//     console.log(name.charAt(i));
// }














// function isPalindrome(str) {
//   // Normalize the string: remove non-alphanumeric characters and convert to lowercase
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//   // Reverse the cleaned string
//   const reversedStr = cleanedStr.split('').reverse().join('');

//   // Compare the original cleaned string with its reversed version
//   return cleanedStr === reversedStr;
// }

// // Examples:
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("Racecar")); // true
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("hello")); // false


// // program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);





// let count=0
// let vowels="aeiouAEIOU"
// let Str="xyzeuoi"
// for(let i=0; i<Str.length;i++){
//     if(vowel.includes(Str[i])){
//         Voecount +=1;
//     }
//     else{
//         ConstCount+=1;
//     }
// }
// console.log(Vowcount);


// let name="my class"
// console.log(name);

        // ARRRAYS

// let num=[1,2,3,4,5]
// num.forEach(( element,index)=>console.log(index,element))

// let changed=num.map((num)=>num*num)
// console.log(changed);
    
        //  Reduce

    //  let num=[1,2,3,4]
    //  let sum=num.reduce((some,element)=>some+element)
    //  some=0 ,element=1;
    //  console.log(sum);

          //some

//   let num=[1,2,3,4]    
//  let even =num.some((n)=>n%2)
//  console.log(even);      

        //    every

  
//  let number=[1,3,5,6]  
//  let positive=Number.every((n)=>n>0)
//  console.log(postive);       

// //filter

// let num=[1,2,3,4 ]  
// let even=num.filter((n)=>n%2==0)
// console.log(even)

// let num=[1,2,3,4,12,14,232,4,242 ]  
// let greater=num.find((n)=>n>10)
// console.log(greater);

// let num=[1,2,3,4,12,14, ]  
// num.push(18)
// console.log(num);
// num.pop(2)
// console.log(num);
// num.unshift(0)
// console.log(num);

// let content=["my","hi","hllo"]
// let changed=content.splice(1,1,"bye")
// console.log(changed);
// content.splice(1,0,"hlo")
// console.log(content);
  

//concet
// let arr1=[1,2,3,4]
// let arr2=[12,13,15,16]
// let arr3=arr1.concat(arr2)
// console.log(arr3);

//1. find the missing from given array

// let num=[1,3,4,6,7]
// for(i=1;i<=num.length+1;i++){
    
//     if(i==num[i-1]){
//         continue
        
//     }
//     else
//       console.log(i);
//         break;
// }


2.// find the 2 missing from given array

// let num=[1,2,3,4,6,8,9]
// let missing=[]
// for(i=1;i<=num.length+2;i++){
//     if(!num.includes(i)){
//         missing.push(i)
//     }
// }
// console.log(missing);


// const twosum=(list,sum)=>{
//     for(let i=0; i<list.length;i++){
//         for(let j=i+1;j<list.length;j++){
//             if(list[i]+list[j]==sum){
//                 return i,j;
//             }

//     }
// }
//  return[]
// }
// console.log(twosum([1,2,3,4,8],10));


//move all zero to end
//[2,4,-4,6,-5,0,-3]

// move all the zeroes to the end 
// input : [1,32,0,0,42,44,2,5,2,0]
// function moveZeroesToEnd(arr) {
//     let result = [];
//     let zeroCount = 0;
//     for (let num of arr) {
//         if (num == 0) {
//             zeroCount++;
//         } else {
//             result.push(num);
//         }
//     }
//     while (zeroCount) {
//         result.push(0);
//         zeroCount--;
//     }
//     return result;
// }

// const input = [1,32,0,0,42,44,2,5,2,0];
// console.log(moveZeroesToEnd(input));


// let maxSum=-Infinity
// let num=[2,-4,-4,6,-5,0,-3,5,9]
// for(let i=1;i<num.length;i++){
//     let sum=0
//     for(j=i+1;j<num.length;j++){
//         sum=num[j]
//         if(maxSum<sum) maxSum=sum
//     }
// }




//arr=[1,2,3,4]==<[4,1,2,3]
//right rotate by one place

// let arr = [1, 2, 3, 4];
// const rightRotateByOne = (array) => {
//     if (array.length === 0) return array;
//     let last = array.pop();
//     array.unshift(last);
//     return array;
// };
// console.log(rightRotateByOne(arr));


//product of array except self
//[101,102,103,1,2,3,104,105,5,6,7]
// function productExceptSelf(nums) {
//     const n = nums.length;
//     const output = new Array(n).fill(1);

//     let left = 1;
//     for (let i = 0; i < n; i++) {
//         output[i] = left;
//         left *= nums[i];
//     }

//     let right = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         output[i] *= right;
//         right *= nums[i];
//     }

//     return output;
// }

// const arr2 = [101,102,103,1,2,3,104,105,5,6,7];
// console.log(productExceptSelf(arr2));

// let n=[101,102,103,1,2,3,4,104,105,5,6,7]
// n.sort((a,b)=>(a-b))
// // console.log(n);   
// let length=1;
// let maxLength=1;  
// for(let i=0;i<n.length;i++){
//     if(n[i]==n[i-1]+1){
//         length++;
//     }
//     else length=1
//     if(length>maxLength){
//         maxLength=length;
      
//     }
// }
// console.log(maxLength);

    //object
// let details={"name":"ssr","age":20,
//     "college":"rbmi"}
//     console.log(details["name"])
//     details["location"]="bareilly"
// console.log(details);
// details["location"]="UP"
// console.log(details);

// delete details["locatin"]
// console.log(details);

//check data or details are same or not

// let data={
//     "name":"ssr",
//     "age":20}
// console.log(details==data);
// console.log(details,data);

//check whether the the keyb is present or not
// let details={"name":"ssr","age":20,
//     "college":"rbmi"}
// for(let key in details){
//     console.log(key);
//    for(let value in details){ 
//     console.log("the value =",value);
// }
// }


//find the non-repeating element

// number=[1,3,4,3,5,1,3,5,2,23,4,1,2]
// // find frequency of each element from Array
// let data={};
// for(let i of number){
//     data[i]=(data[i]|| 0)+1
// }
// console.log(data);

// // // find first non repeating element from array
// for(let key in data){
//     if(data[key]==1){
//         console.log(" non-repeating",key);
//         break
//     }
// }

// //invert the object(reverse key value)

// let reverse={}
// for(key in data){
//     reverse[data[key]]=key
// }
// console.log( "the reverse are",reverse);


// //add two objects with same key
// let data1={1:5,2:10,3:15}
// let data2={1:7,4:10,3:10}

// //merge two objects

// let merge={}
// for(let key in data1){
//     merge[key]=data1[key]
// }
// for(let key in data2){
//     merge[key]=merge[key]&&merge[key]+data2[key]||data2[key]
// }
// console.log("the merged object is",merge);


//group words by length
// let objects = ["apple", "ball", "cat", "dog"];
// console.log(objects);
// console.log("the length of object is", objects.length);

// let objects_len = {};
// for (let word of objects) {
//     let len = word.length;
//     if (!objects_len[len]) {
//         objects_len[len] = [];
//     }
//     objects_len[len].push(word);
// }
// console.log("Grouped by length:", objects_len);


//group words by first letter

// let objects = ["apple", "ball", "cat", "dog"];
// let groupedByFirstLetter = {};
// for (let word of objects) {
//     let firstLetter = word[0].toLowerCase();
//     if (!groupedByFirstLetter[firstLetter]) {
//         groupedByFirstLetter[firstLetter] = [];
//     }
//     groupedByFirstLetter[firstLetter].push(word);
// }
// console.log("Grouped by first letter:", groupedByFirstLetter);


   //group words by last letter

//  let objects = ["apple", "ball", "cat", "dog"];
//  let groupedByLastLetter = {};
//  for (let word of objects) {
//      let lastLetter = word[word.length - 1].toLowerCase();
//      if (!groupedByLastLetter[lastLetter]) {
//          groupedByLastLetter[lastLetter] = [];   
//         }           
//         groupedByLastLetter[lastLetter].push(word);     
//     }   
//     console.log("Grouped by last letter:", groupedByLastLetter);

//group words by length and first letter
// let objects = ["apple", "ball", "cat", "dog"];
//  let groupedByLengthAndFirstLetter = {};          

//  for (let word of objects) {
//      let len = word.length;
//      let firstLetter = word[0].toLowerCase();
//      if (!groupedByLengthAndFirstLetter[len]) { 
//             groupedByLengthAndFirstLetter[len] = {};
//         }       
//         if (!groupedByLengthAndFirstLetter[len][firstLetter]) {
//             groupedByLengthAndFirstLetter[len][firstLetter] = [];
//         }
//         groupedByLengthAndFirstLetter[len][firstLetter].push(word);
//     }
//     console.log("Grouped by length and first letter:", groupedByLengthAndFirstLetter);
    
//check two word are anagrams or not
//  let word1 = "listen";
//  let word2 = "silent";
//  const h=() => {
//      if (word1.length !== word2.length) {
//          return "Not_anagram";
//      }
//     for(let i = 0; i < word1.length; i++) {
//          if (word1[i] !== word2[i]) {
//              return "Not_anagram" ;
//          }
//          for(let i of word) {
//              if (word1[i] !== word2[i]) {
//                  return "Not_anagram";
//              }
//          }
//      }
//      return "anagram";
//  };
//  console.log(h());
//print all leaders in an array
//what is leader in array?
//in an array, a leader is an element that is greater than all the elements to its right
// console.log(leadersOptimized([16, 17, 4, 3, 5, 2]));
//output: [17, 5, 2]
// let arr = [16, 17, 4, 3, 5, 2];
// function leadersOptimized(arr) {
//         let leaders = [];
//         let maxFromRight = -Infinity;
//         for (let i = arr.length - 1; i >= 0; i--) {
//                 if (arr[i] > maxFromRight) {
//                         leaders.unshift(arr[i]);
//                         maxFromRight = arr[i];
//                 }
//         }
//         return leaders;
// }
// console.log(leadersOptimized(arr));



  




    


        
        





                


 


        
    
    
 
    
















