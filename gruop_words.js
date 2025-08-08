//group words
let onjects=["tea","eat","bat","tab"];
let groupWords = (words) => {
    "aet"=["tea","eat"],
    "abt"=["bat","tab"]
    let grouped = {};               
    for (let word of words) {
        let sorted = word.split('').sort().join('');
        if (!grouped[sorted]) {
            grouped[sorted] = [];
        }
        grouped[sorted].push(word);
    }
    return Object.values(grouped);
};
let groupedWords = groupWords(onjects);
console.log(groupedWords); // [["tea", "eat"], ["bat", "tab"]



