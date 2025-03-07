import fetch from "node-fetch";

async function interactionWithAPI(endpoint, method, body){
    const response = await fetch(`https://spacescavanger.onrender.com/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(body),
    });
    return await response.json();
}

const playerID = 'aleksandte@uia.no'

//console.log(interactionWithAPI(`start/${playerID}`, 'GET'))

//interactionWithAPI(`start/{answer, ${playerID}}`, 'POST');