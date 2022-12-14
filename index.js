const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; // 91 characters in total
let body = document.querySelector("body")
let button = document.getElementById("generate")
let passwordOne = document.getElementById("passwordOne-el")
let passwordTwo = document.getElementById("passwordTwo-el")
const toggle = document.querySelector("#toggle")
const ball = document.querySelector(".ball")
let title = document.querySelector(".headline")
let pitch = document.querySelector(".pitch")
let dark = document.querySelector(".dark")
let day = document.querySelector(".day")

toggle.addEventListener("click", function() {
    if (body.classList.contains("light")) {
        body.classList.remove("light")
        ball.classList.remove("move-right")
        title.classList.remove("light-font")
        pitch.classList.remove("light-font")
        dark.classList.remove("light-font")
        day.classList.remove("light-font")
    } else {
        body.classList.add("light")
        ball.classList.add("move-right")
        title.classList.add("light-font")
        pitch.classList.add("light-font")
        dark.classList.add("light-font")
        day.classList.add("light-font")
    }
})

let passwordLength = 15;

function randomIndex() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword() {
    let newPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        newPassword += randomIndex()
    }
    return newPassword
}

button.addEventListener("click", function() {
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
}) 
