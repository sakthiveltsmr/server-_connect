

function twoDimensionArray(a, b) {
    let a1 = [];

    for (let i = 0; i <= a; i++){
        for (let j = 0; j < b; j++){
            a1[i]=[]
        }
    }

     for (let i = 0; i <= a; i++){
        for (let j = 0; j < b; j++){
            a1[i][j]=j
        }
     }
    
    return a1
} // Output: ["1", "2", "3", "4", "5", "6"]

const x = 2;
const y = 3;

const result = twoDimensionArray(x, y);
console.log(result)
