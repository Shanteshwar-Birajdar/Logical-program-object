console.log("=========== Object.Keys Method ===========");
var car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    color : "blue"
};
// Using Object.keys()
var keys = Object.keys(car);
var lastKey = keys[keys.length - 1];
console.log("Last property using keys : ", lastKey, car[lastKey]);

console.log("=========== Object.entries Method ===========");
var car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    color : "blue"
};
// Using Object.entries()
var entries = Object.entries(car);
var lastEntry = entries[entries.length - 1];
console.log("Last property using entries : ", lastEntry[0], lastEntry[1]);