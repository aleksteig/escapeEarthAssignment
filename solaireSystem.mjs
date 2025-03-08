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

// async function mainTask1() {
//     try {
//         const data = await interactionWithAPI(`/bodies/sun`, 'GET');
//         const data2 = await interactionWithAPI(`/bodies/earth`, 'GET')
//         console.log(data, data2);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// mainTask1();

// async function mainTask2() {
//     try {
//         const data = await interactionWithAPI(`/bodies?data=id,axialTilt`, 'GET');
//         //console.log(data)
//         let dataValues = Object.values(data);
//         let finalDataValues = dataValues[0];
//         let currentClosestAxialTiltToEarth = "";
//         let earthAxialTilt = 23.4393;
//         let currentDiffOfAxialTilt = 23.4393;
//         for(let i = 0; i < finalDataValues.length; i++){
//             if(Object.values(finalDataValues[i])[0] != 'terre'){
//                 if(Math.abs(earthAxialTilt - Object.values(finalDataValues[i])[1]) < currentDiffOfAxialTilt){
//                     currentDiffOfAxialTilt = Math.abs(earthAxialTilt - Object.values(finalDataValues[i])[1]);
//                     currentClosestAxialTiltToEarth = Object.values(finalDataValues[i])[0];
//                 };
//             }
            
//             //console.log(Object.values(finalDataValues[i])[1])
//         }
//         console.log(currentClosestAxialTiltToEarth);
        
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// mainTask2();

async function mainTask3() {
    try {
        const data = await interactionWithAPI(`/bodies?data=id,sideralRotation`, 'GET');
        let dataValues = Object.values(data);
        let finalDataValues = dataValues[0];
        let currentFastestSideralRotationPlanet = "";
        let currentPlanetSideralRotationSpeed = 24;
        for(let i = 0; i < finalDataValues.length; i++){
            if(Object.values(finalDataValues[i])[1] != 0){
                if(currentPlanetSideralRotationSpeed > Math.abs(Object.values(finalDataValues[i])[1])){
                    currentPlanetSideralRotationSpeed = Object.values(finalDataValues[i])[1]
                    currentFastestSideralRotationPlanet = Object.values(finalDataValues[i])[0]
                };
            }
        }
        console.log(currentFastestSideralRotationPlanet);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

mainTask3();