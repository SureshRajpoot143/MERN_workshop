//rearrengeAlternatre([1,3,-4,5,-6,-2]);
//output[1, -4, 3, -6, 5, -2]
let rearrangeAlternatre = (arr) => {
    let positive = [];
    let negative = [];
    
    arr.forEach(num => {
        if (num >= 0) {
            positive.push(num);
        } else {
            negative.push(num);
        }
    });

    let result = [];
    let maxLength = Math.max(positive.length, negative.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < positive.length) {
            result.push(positive[i]);
        }
        if (i < negative.length) {
            result.push(negative[i]);
        }
    }
    
    return result;
};
let arr = [1, 3, -4, 5, -6, -2];
console.log(rearrangeAlternatre(arr));
