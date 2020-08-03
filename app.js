// const names: Array<string> =[];
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// const promise: Promise<string> =new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve('i am done');
//     },2000)
// });
//constrains 
//function merge<T,U>(objA:T , objB:U){
//constrains 
//function merge<T extends string|number, U extends Object>(objA:T , objB:U){
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Hari', Hobbies: ['coading'] }, { age: 26 });
console.log(mergeObj);
function countDescription(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + 'elements.';
    }
    return [element, descriptionText];
}
var desp = countDescription(['cooking', 'coading']);
console.log(desp);
//key of constants
function extactConversion(obj, key) {
    return 'Value :' + obj[key];
}
extactConversion({ name: 'Hari' }, 'name');
//Generic class
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Hari');
textStorage.addItem('Gopi');
console.log(textStorage.getItems());
textStorage.removeItem('Hari');
console.log(textStorage.getItems());
