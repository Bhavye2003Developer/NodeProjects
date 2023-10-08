const canvas = document.getElementById("platform")
const ctx = canvas.getContext("2d")

const height = 500;
const width = 1000;

let x = 100
let y = 50

ctx.beginPath()
ctx.moveTo(x, y)

document.onkeydown = function (evt) {
    if (evt.key == "ArrowRight") {
        console.log("Moving right")
        x += 20
        ctx.lineTo(x, y)
        ctx.stroke()
    }
    else if (evt.key == "ArrowDown") {
        console.log("Moving down")
        y += 20
        ctx.lineTo(x, y)
        ctx.stroke()
    }
    else if (evt.key == "ArrowUp") {
        console.log("Moving up")
        y -= 20
        ctx.lineTo(x, y)
        ctx.stroke()
    }
    else if (evt.key == "ArrowLeft") {
        console.log("Moving left")
        x -= 20
        ctx.lineTo(x, y)
        ctx.stroke()
    }
    else if (evt.key == "c") {
        console.log("Creating circle")
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        ctx.stroke()
    }
}