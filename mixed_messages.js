const array1 = ["You"];
const array2 = ["are going to", "are not going to", "will", "won't", "may", "may not", "might", "might not"];
const array3 = ["have", "be"];
const array4 = ["a wonderful", "a bad", "an awful", "a terrible", "an amazing", "a happy", "a sad"];
const array5_1 = ["day", "week", "weekend", "month", "year", "future"];
const array5_2 = ["partner", "worker", "magician", "person", "boss", "co-worker", "writer"];

let rNums = [];
let sentence = [];

for (let i = 1; i <= 5; i++) {
    switch (i) {
        case 1:
            rNums.push(Math.floor(Math.random() * array1.length));
            sentence.push(array1[rNums[0]]);
        break;

        case 2:
            rNums.push(Math.floor(Math.random() * array2.length));
            sentence.push(array2[rNums[1]]);
        break;

        case 3:
            rNums.push(Math.floor(Math.random() * array3.length));
            sentence.push(array3[rNums[2]]);        
        break;

        case 4:
            rNums.push(Math.floor(Math.random() * array4.length));
            sentence.push(array4[rNums[3]]);
        break;
        
        case 5:
            if (sentence[2] === array3[0]) {
                rNums.push(Math.floor(Math.random() * array5_1.length));
                sentence.push(array5_1[rNums[4]]);
            }
            else if (sentence[2] === array3[1]) {
                rNums.push(Math.floor(Math.random() * array5_2.length));
                sentence.push(array5_2[rNums[4]]);
            }
        break;
    }
}

sentence = sentence.join(" ");

console.log(sentence);