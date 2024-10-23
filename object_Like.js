function isObjectLike(value){
    return typeof value === 'object' && value !== null;
}
console.log(isObjectLike({}));
console.log(isObjectLike([]));
console.log(isObjectLike(null));
console.log(isObjectLike(42));
console.log(('string'));
