let A=[{code:1101,color:'red'},{code:1102,color:'yellow'},{code:1103,color:'green'},{code:1104,color:'red'}];
console.log("The elements of Array of is ${A}");
let emptyarray=[];
let color="red";
for(let index=0;index<5;index++){
    if(A[index].color=="red"){
        emptyarray.push(A[index]);
        console.log("The value of red pencile is",A[index]);
    }
}