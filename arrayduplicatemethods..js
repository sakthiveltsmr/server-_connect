
//usiing objectkeys
let arr = [1, 2, 3, 4, 2, 3, 5, 6, 6];
let uniqueArray =Object.keys(arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = true;
    return accumulator;
}, {}));
console.log(uniqueArray); // Output: ["1", "2", "3", "4", "5", "6"]


//using reducer
let a = [1, 2, 3, 4, 2, 3, 5, 6, 6];
let uniqueArray1 = arr.reduce((defaultvalue, item) => {
    if (!defaultvalue.includes(item)) {
        defaultvalue.push(item)
    }
    return defaultvalue
},[])
console.log(uniqueArray1); // Output: ["1", "2", "3", "4", "5", "6"]

//using set instence
let arr2 = [1, 2, 3, 4, 2, 3, 5, 6, 6];
let uniqueArray2 = [...new Set(arr)]
console.log(uniqueArray2); // Output: ["1", "2", "3", "4", "5", "6"]

//foreach method
let arr3 = [1, 2, 3, 4, 2, 3, 5, 6, 6];
let uniqu=[]
arr.forEach((item) => {
    if (!uniqu.includes(item)) {
        uniqu.push(item)
    }
})
console.log(uniqu); // Output: ["1", "2", "3", "4", "5", "6"]


//using filters
let arr4 = [1, 2, 3, 4, 2, 3, 5, 6, 6];

let result=arr.filter((item,index,self) => self.indexOf(item)===index)
console.log(result); // Output: ["1", "2", "3", "4", "5", "6"]
