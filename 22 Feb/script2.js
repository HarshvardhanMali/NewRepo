let url='https://randomuser.me/api/';
function FetchRandomUser(){
    let promiseObjone = fetch(url);
    console.log("The promise object is", promiseObjone);
    promiseObjone.then(dataIsReady);
    promiseObjone.catch(dataIsNotReady);

    function  dataIsReady(){

    };

    function dataIsNotReady
}