// example of map 
// it transforms  each value in the array to a different value with the help of a function defined b/w ()

let sampleArray:any[] = [1,2,3,4,5];

const mapArray = sampleArray.map(e=>e**2); // square all the values in the array

console.log(mapArray);


// filter - it prints the value inside the array based on some function and omits the rest 
console.log(sampleArray.filter(e=>e%2==0)); // gives only the even number

// find - it gives the first matched element based on the function provided

// find the  first element which is not equal to 1
console.log(sampleArray.find(e=>e%2!=1)); // use tsc -t ES2016 --lib "ES2016","DOM" ./your_file.ts to run 


// findIndex  - it returns the index the  first element which is greater than 10
console.log(mapArray.findIndex(e=>e>10)); // use tsc -t ES2016 --lib "ES2016","DOM" ./your_file.ts to run 

