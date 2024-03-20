//let promiseObj= new promise();
function CheckThePromise(){
//let promiseObj =new promiseObj(function(resolve,reject){

//});
let promiseObj =new Promise(function(resolve,reject){
    setTimeout(function(){
    

    if(x>0){
        resolve("Good X greter than 0");

    }
    else if(x<0){
        reject(new error()("Okay X is equal to or less tahn 0"));
    }
});
});
}

promiseObj.then(executeCodeAfterFullFillment,executeCodeAfterRejection);
promiseObj.then(executeCodeAfterFullFillment);
promiseObj.catch(executeCodeAfterRejection);
promiseObj.finally(executeCodeAfteSettlement)
function executeCodeAfterFullFillment(outputmessege){
    console.log("The output messege is", outputmessege)
}
function executeCodeAfterRejection(outputmessege){
   console.log("The output messege is", outputmessege)
} 

//make a call Object ingradients having ingradients must have two properties buutton cllick then decrement the Value 
//3 & 4 greater than 0