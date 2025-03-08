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

const answer1 = 696342 - 695508;
const answer2 = 'mars'
const playerID = 'aleksandte@uia.no'

console.log(await interactionWithAPI(`start/?player=${playerID}`, 'GET'))

const respondAnswer1 = await interactionWithAPI(`answer`, 'POST', {
    answer: answer1,
    player: playerID,
});

// console.log(respondAnswer1);

const respondAnswer2 = await interactionWithAPI(`answer`, 'POST', {
    answer: answer2,
    player: playerID,
});

console.log(respondAnswer2);