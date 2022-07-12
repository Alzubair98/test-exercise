function stringLength(string){
    console.log(typeof(string.length));
};

stringLength('why')

if (typeof(stringLength) === Number){
    console.log("Test Pass");
} else{
    console.log('Test Falid')
}