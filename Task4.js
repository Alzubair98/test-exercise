function capitalize(string){
    if (typeof(string) !== 'string' || string === ''){
        return 'please enter a word'
    } else {
    return string.toLowerCase().split(' ').map( (word)=>{
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ')};
};


module.exports = capitalize;

console.log(capitalize(''))