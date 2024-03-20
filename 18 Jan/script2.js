//nested object
//Ramkesh Suresh


var addressObj={};
addressObj.RameshAddress={};
addressObj.SureshAddress={};


addressObj.RameshAddress.landmark="Nawle Bridge";
addressObj.SureshAddress.landmark="Pune";

console.log("The value address is",addressObj);
console.log("The landmark address of Ramesh is",addressObj.RameshAddress.landmark);
console.log(addressObj.SureshAddress.landmark);
