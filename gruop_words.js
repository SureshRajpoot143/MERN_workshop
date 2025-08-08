//group words
let object=["tea","eat","bat","tab"];
let groupWords = (words) => {
    let grouped = {};
    words.forEach(word => {
        let sortedWord = word.split('').sort().join('');
        if (!grouped[sortedWord]) {
            grouped[sortedWord] = [];
        }
        grouped[sortedWord].push(word);
    });
    return Object.values(grouped);
}       
let groupedWords = groupWords(object);
console.log(groupedWords); 


