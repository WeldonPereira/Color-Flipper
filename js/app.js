const btn = document.getElementById("btn")
const color = document.querySelector(".color")

const colors = [
    "red", "blue", "green", "pink", "yellow", "orange", "purple", 
    "brown", "gray", "white", "cyan", "magenta", "lime"
]

function randomColor(){
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber]
}

btn.addEventListener("click", randomColor)

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
