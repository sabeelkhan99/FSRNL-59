const arr1 = [1, 2, 5, 6];
const arr2 = [8, 9, 99, 100];
const arr3 = [3278.32, 347689.8898];


const res = arr1.concat(arr2, arr3);

console.log(res);



// Question 1:
// Inputs string : The blue fox jumps over a white lazy dog
// Output string : ehT eulb xof spmuj revo a etihw yzal god

const sentence1 = "The blue fox jumps over a white lazy dog";

const words1 = sentence1.split(' ');

const res1 = [];
for (const word of words1) {
    res1.push(word.split('').reverse().join(''));
}

console.log(res1.join(' '));

// Logic here.



// ---------------------------------------------------
// Question 2:
const sentence2 = "The blue fox jumps over a white lazy dog";
// Output string : ThE bLuE fOx JuPs OvEr A wHiTe LaZy DoG

const words2 = sentence2.split(' ');

const res2 = [];
let isTrue = true;
for (const word of words2) {
    const wordsArray = word.split('');
    let temp = "";
    for (const char of wordsArray) {
        if (isTrue) {
            temp += char.toUpperCase();
        } else {
            temp += char.toLowerCase();
        }
        isTrue = !isTrue;
    }
    res2.push(temp);
}

console.log(res2.join(' '));


