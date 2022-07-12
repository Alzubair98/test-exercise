function capitalize(string){
    return string.toLowerCase().split(' ').map( (word)=>{
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ')
};


module.exports = capitalize;