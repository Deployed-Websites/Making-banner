let box = document.getElementsByClassName("box")

function DynamicPopulating(amount,content,clear){
    if(clear){
        box[0].innerHTML = "";
    }
    for (let i = 0; i < amount; i++) {
        let number = document.createElement("span")
        number.textContent = content
        if(number.textContent=="."){
            number.style.fontSize = "40px"
        }else{
            number.style.fontSize = "20px"
        }
        number.style.color = "black"
        const computedStyles = globalThis.getComputedStyle(box[0]);
        let maxDisplacementHorizontal = Number.parseFloat(computedStyles.width)-60
        let randomisedplacement = Math.floor((Math.random()*maxDisplacementHorizontal)+1)
        let makeIntoString = randomisedplacement+"px"

        let maxDisplacementVertical = Number.parseFloat(computedStyles.height) - 60
        let randomisedplacement2 = Math.floor((Math.random()*maxDisplacementVertical)+1)
        let makeIntoString2 = randomisedplacement2+"px"


        number.style.position = "absolute"
        number.style.top = makeIntoString2
        number.style.left = makeIntoString
        let Name = "spin"
        let Duration = 3+"s"
        let Iterations = "infinite"
        let TimingFunction = "linear"
        number.style.animationName = Name
        number.style.animationDuration = Duration
        number.style.animationIterationCount = Iterations
        number.style.animationTimingFunction = TimingFunction

        box[0].appendChild(number)

    }
}
/*

*/

function runCommand(){
    TwosCount.textContent = "Number of 2s: "+slider1.value
    DotsCount.textContent = "Number of dots: "+slider2.value
    RootCount.textContent = "Number of square roots: "+slider3.value
    DynamicPopulating(slider1.value,"2",true)
    DynamicPopulating(slider2.value,".",false)
    DynamicPopulating(slider3.value,"√",false)
}
const slider1 = document.getElementById("slider1")
const TwosCount = document.getElementById("TwosCount")
const slider2 = document.getElementById("slider2")
const DotsCount = document.getElementById("DotsCount")
const slider3 = document.getElementById("slider3")
const RootCount = document.getElementById("RootCount")

runCommand()

slider1.addEventListener("input",runCommand)
slider2.addEventListener("input",runCommand)
slider3.addEventListener("input",runCommand)

const button = document.getElementById("refresh")
button.style.position="absolute"
button.style.left="800px"
button.style.top="100px"
button.addEventListener("click", () => {
    runCommand()
})

let picker = document.getElementById("colourPicker")
picker.addEventListener("input", () => {
    box[0].style.backgroundColor = picker.value
    box[0].style.borderColor = picker.value
})

let Resetbackground = document.getElementById("reset")
Resetbackground.addEventListener("click", () => {
    box[0].style.backgroundColor = "#bed4df"
    box[0].style.borderColor = "#bed4df"
})