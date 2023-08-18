// async function bakeCake() {
//     console.log("Outside timeout.")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("In setTimeout.")
//             resolve("In promise resolved")
//         }, 3000)
//     })
// }

// bakeCake().then((response) => {
//     console.log(response)
// })

// async function doWork() {
//     console.log("Inside async function")
//     return new Promise(resolve => {
//         console.log("Inside promise")
//         resolve("Hello world")
//     })
// }


// const a = doWork()

// a.then((resolved) => {
//     console.log(resolved)
// })

// console.log(`This is a : ${a} and type : ${typeof (a)}`)


// const anyFunc = () => {
//     console.log("It's a resolve keyword")
// }

// await makes it in sequence asynchronous code.


async function getWeather() {
    const delhi = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(21)
        }, 3000)
    })

    const banglore = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(23)
        }, 7000)
    })

    let d, b
    delhi.then((deg) => {
        console.log(deg)
        d = deg
    })
    banglore.then(deg => {
        console.log(deg)
        b = deg
    })

    // let d = await delhi
    // console.log("D done")
    // let b = await banglore
    // console.log("B done")

    return d + b
}

// getWeather().then((data) => {
//     console.log(data)
// })

async function getDelay(time) {
    console.log("Start of async")
    const delay = new Promise(resolve => {
        setTimeout(() => {
            console.log("Delayed.")
            resolve("Resolved")
        }, time)
        // resolve("Hey")
    })
    const response = await delay
    console.log("End of async")
    return response
}

getDelay(3000).then(response => {
    console.log(response)
})

console.log("End of code")

// this only works in async function (In async function only you can halt the execution via await keyword.)
// await -> operation is completed before moving on.
     //  -> it waits, indefinitely unless, promise is resolved, i.e. resolve() or reject()