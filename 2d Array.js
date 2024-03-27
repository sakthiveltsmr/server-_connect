

// function twoDimensionArray(a, b) {
//     let a1 = [];

//     for (let i = 0; i <= a; i++){
//         for (let j = 0; j < b; j++){
//             a1[i]=[]
//         }
//     }

//      for (let i = 0; i <= a; i++){
//         for (let j = 0; j < b; j++){
//             a1[i][j]=j
//         }
//      }
    
//     return a1
// } // Output: ["1", "2", "3", "4", "5", "6"]

// const x = 2;
// const y = 3;

// const result = twoDimensionArray(x, y);
// console.log(result)
const x = 2; // Number of rows
const y = 2; // Number of columns

// Create a 2D array with dimensions x and y
const twoDimArray = [];
for (let i = 0; i < x; i++) {
    twoDimArray[i] = []; // Initialize each row as an empty array
    for (let j = 0; j < y; j++) {
        twoDimArray[i][j] = 0; // Initialize each element to 0 (or any other initial value)
    }
}

console.log(twoDimArray);
