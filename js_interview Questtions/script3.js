async function fetchdata()
{
    const responce = await fetch("/data");
    console.log(responce);
}

//200-ok
//401-unothorised user
//500-internal network error
//404-page not found
//400-bad request

// fetch request by async and promice,await.
//API-through api fetch data & display it on ui,in the form of url using http method.
