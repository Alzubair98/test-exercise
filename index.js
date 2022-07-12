//Task 1
function stringLength(string){
    if (string.length >= 1 && string.length <= 10){
        return string.length;
    } else{
        return 'Error conditions are not met';
    }
    
};

console.log(stringLength('aaaaaaaaaaa'))


module.exports = stringLength;

/////////////////////////////////////////////