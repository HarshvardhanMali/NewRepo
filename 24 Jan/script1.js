// Freeze method

let obj = {
    roll_No:21,
    Name:"Harsh",

};

obj= Object.freeze(obj);

obj.roll_No=45;
console.log("The updated value is",obj);