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

// async function mainTask3() {
//     try {
//         const data = await interactionWithAPI(`/bodies?data=id,sideralRotation,isPlanet`, 'GET');
//         let dataValues = Object.values(data);
//         let finalDataValues = dataValues[0];
//         let currentFastestSideralRotationPlanet = "";
//         let currentPlanetSideralRotationSpeed = 24;
//         for(let i = 0; i < finalDataValues.length; i++){
//             if(Object.values(finalDataValues[i])[2] != 0 && Object.values(finalDataValues[i])[1] == true){
//                 if(currentPlanetSideralRotationSpeed > Math.abs(Object.values(finalDataValues[i])[2])){
//                     currentPlanetSideralRotationSpeed = Math.abs(Object.values(finalDataValues[i])[2])
//                     currentFastestSideralRotationPlanet = Object.values(finalDataValues[i])[0]
//                 };
//             }
//         }
//         console.log(currentFastestSideralRotationPlanet);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// mainTask3();


// async function mainTask4() {
//     try {
//         const data = await interactionWithAPI(`/bodies`, 'GET');
//         const jupiterMoons = data.bodies.filter(body =>
//             body.aroundPlanet && body.aroundPlanet.planet === "jupiter"
//         );
//         let amountOfMoons = jupiterMoons.length;
//         console.log(amountOfMoons)
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// mainTask4();

// async function mainTask5() {
//     try {
//         const data = await interactionWithAPI(`/bodies`, 'GET');
//         let meanRadiusIndexPosition = 15;
//         let moonNameIndexPosition = 1;
//         const jupiterMoons = data.bodies.filter(body =>
//             body.aroundPlanet && body.aroundPlanet.planet === "jupiter"
//         );
//         let currentBiggestMoon = "";
//         let currentBiggestMoonSize = 0;
//         for(let i = 0; i < jupiterMoons.length; i++){
//             if(Object.values(jupiterMoons[i])[meanRadiusIndexPosition] > currentBiggestMoonSize){
//                 currentBiggestMoon = Object.values(jupiterMoons[i])[moonNameIndexPosition]
//                 currentBiggestMoonSize = Object.values(jupiterMoons[i])[meanRadiusIndexPosition]
//             }
//             // console.log(Object.values(jupiterMoons[i])[meanRadiusIndexPosition])
//         }
//         // console.log(Object.values(jupiterMoons))
//         console.log(currentBiggestMoon)
//         console.log(currentBiggestMoonSize)

//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// mainTask5();

async function mainTask6() {
    try {
        const data = await interactionWithAPI(`/bodies`, 'GET');
        const jupiterMoons = data.bodies.filter(body =>
            body.aroundPlanet && body.aroundPlanet.planet === "jupiter"
        );
        let amountOfMoons = jupiterMoons.length;
        console.log(amountOfMoons)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

mainTask6();