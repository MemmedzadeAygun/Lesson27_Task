
let numbers='32,31,34,36,31';
let splitNumbers=numbers.split('');
for(let i=0; i<splitNumbers.length; i++){
    if (splitNumbers[i]==',') {
        splitNumbers[i]=splitNumbers[i].replace(',',';');
    }
}
console.log(splitNumbers.join(""));         //Task1



const nums=[1,2,3,4,5,6,7,8,9,10];
const [firstNumber,secondNumber, ...others]=nums;

console.log("First number: "+firstNumber);
console.log("Second number: "+secondNumber);
console.log(others);                    //Task2



let array=[12,5,3,9,22,45,1,6,8,15];
let maxNumber=array[0];

for(let i=1; i<array.length; i++){
    if (array[i]>maxNumber) {
        maxNumber=array[i];
    }
}
console.log("Max number: "+maxNumber);      //Task3 method1



let array2=[13,45,32,5,9,23,7,1,87,56];

let max=Math.max(...array2);
console.log("Max element: "+max);                          //Task3 method2



let array3=[13,45,32,5,9,23,7,1,87,56];
let maxElement=array3[0];
for(let i=1; i<array3.length; i++){
    maxElement=Math.max(maxElement,array3[i]);
}

console.log("Max element: "+maxElement);                //Task3 method3


const array4=[1,2,3,4,5];
const copyArray = [...array4];
for(let i=0; i<copyArray.length; i++){
    copyArray[i]*=2;
}
console.log("CopyArray: "+copyArray);
console.log("OriginalArray: "+array4);              //Task4

