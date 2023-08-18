const p = new Promise((resolve, reject) => {
    if (true) {
        console.log("Promise resolved")
        resolve()
    }
    else {
        console.log("Promise rejected")
        reject()
    }
})

const getAnswer = async () => {
    const answer = await p.then(() => { return "then1" })
    console.log(`Answer is ${answer}`)
    return answer
}

getAnswer().then((answer) => {
    console.log(`Answer is outside of getanswer : ${answer}`)
})