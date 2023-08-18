const makeRequest = (localtion) => {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${localtion}`);
        if (localtion === "Google") {
            resolve("Google says hi");
        } else {
            reject("We can only talk to Google");
        }
    });
}

const processRequest = (response) => {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra Information + ${response}`);
    });
}

// makeRequest('Google').then(response => {
//     console.log('Response Received');
//     return processRequest(response);
// }).then(processedResponse => {
//     console.log(processedResponse);
// })


async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log(response, typeof response)
        console.log('Response Received');
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (err) {
        console.log(err);
    }
}

doWork();