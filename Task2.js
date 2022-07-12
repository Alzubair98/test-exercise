//Task 2
function reverseString(string){
    string = [...string].reverse().join('');

    return string;
};

module.exports = reverseString;