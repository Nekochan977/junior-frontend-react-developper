//text animation
const textDisplay = document.getElementById("typed")
const phrases = ['Hello, My name is Nadja.', 'I am a Junior Developer.', 'Contact-me! ']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false
function loop(){
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length){

        if (!isDeleting && j <= phrases[i].length){
            currentPhrase.push(phrases[i][j])
            j++
            // console.log("add letter", j)
        }

        if (isDeleting && j <= phrases[i].length){
            currentPhrase.pop(phrases[i][j])
            j--
            // console.log("remove letter", j)
        }

        if (j === phrases[i].length){
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if ( i === phrases.length){
                i = 0
            }
        }
    }
    const speedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed
    setTimeout(loop, time)
}
loop()

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "I am Junior React Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "I am super motivated";
    }, 4000);
    setTimeout(() => {
        text.textContent = "I am also a Painter";
    }, 8000); //1s = 1000 milliseconds
}

const textRemove = () => {
    console.log(text.textContent)
}

textLoad();
textRemove();
setInterval(textLoad, 12000);


