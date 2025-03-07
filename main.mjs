import fetch from "node-fetch";

async function interactionWithAPI(endpoint, method, body = null){
    const response = await fetch(`https://spacescavanger.onrender.com/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    });
    return await response.json();
}

const answer1 = '689962'
const playerID = 'aleksandte@uia.no'

// console.log(await interactionWithAPI(`start/?player=${playerID}`, 'GET'))

const respondAnswer1 = await interactionWithAPI(`answer`, 'POST', {
    player: playerID,
    answer: answer1,
});

console.log(respondAnswer1);