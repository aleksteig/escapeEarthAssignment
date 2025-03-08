import fetch from "node-fetch";

async function interactionWithAPI(endpoint, method, body = null) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest.php${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

async function main() {
    try {
        const data = await interactionWithAPI(`/bodies/sun`, 'GET');
        const data2 = await interactionWithAPI(`/bodies/earth`, 'GET')
        console.log(data, data2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

main();
