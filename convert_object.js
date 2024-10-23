console.log("========== Object.entries Method ==========");
const obj = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
};
 const entries = Object.entries(obj);
 console.table(entries);
 
 console.log("========== Object.keys Method ==========");
 const object = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
};
const entry = Object.keys(obj).map(key => [key,obj[key]]);
console.log(entries);