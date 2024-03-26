let a = "sakthi"
// using for loop
function reverseString(str) {
    let newstring=""
    for (i = str.length - 1; 0 <= i; i--){
        newstring += str[i];
    }
   return newstring

}

reverseString(a);

//using split(),reverse(),join()

function reverseString(str) {
    return str.split('').reverse().join("")
}


//using recursion function
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString("Hello World"); // Output: "dlroW olleH"

