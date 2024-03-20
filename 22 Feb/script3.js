 let x=5;
function CheckThePromise(){
    x=x-1
    let promiseObj =new Promise(function(resolve,reject){
        setTimeout(function(){
        
    
        if(x>4){
            resolve("Good X greter than 4");
    
        }
        else if(x<3){
            reject(new error()("Okay X is equal to or less tahn 3"));
        }
    },5000);
    });
    }
    