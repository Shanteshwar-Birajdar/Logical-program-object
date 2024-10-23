var car = {
    make : "TOyota",
    model : "Camry",
    year : 2020,
    color : "blue"
};
function getObjectLength (obj){
    return Object.keys(obj).length;
}
console.log("Length of car object : " +getObjectLength(car));
