/*
1) Colour same as banner on vkestimating solutions site
2) Double the height
3)

*/



const box = document.getElementsByClassName("box")
let cut;
let positions;
function isTooClose(x, y, minDistance = 30) {
    for (const pos of positions) {
        const dx = pos.x - x;
        const dy = pos.y - y;
        const distance = Math.hypot(dx, dy);

        if (distance < minDistance) {
            return true;
        }
    }
    return false;
}
function changeColor() {
    cut = document.createElement("div")
    cut.style.position = "absolute";
    cut.style.width="100%";
    cut.style.height="100%";
    cut.style.backgroundColor = "#bed4df";
    cut.style.zIndex = "0";
    box[0].appendChild(cut);

    /* const cut2 = document.createElement("div")
    cut2.style.position = "absolute";
    cut2.style.width = "0";
    cut2.style.height = "0";

    const computedStyles = globalThis.getComputedStyle(box[0]);
    const width = computedStyles.width;
    const height = computedStyles.height;
    cut2.style.borderTop = Number.parseFloat(height)+"px solid transparent";

    cut2.style.borderRight = "230px solid #426f86";
    cut2.style.zIndex = "0";
    box[0].appendChild(cut2); */
}


function DynamicPopulating(amount,content,clear){
    positions = [];
    if(clear){
        box[0].innerHTML = "";
    }
    changeColor();
    for (let i = 0; i < amount; i++) {
        let number = document.createElement("span");
        number.textContent = content;
        number.style.fontSize = "20px";
        number.style.color = "#9C9795gp";
        console.log(number.style.color);
        const computedStyles = globalThis.getComputedStyle(box[0]);
        let maxDisplacementHorizontal = Number.parseFloat(computedStyles.width)-Number.parseFloat(number.style.fontSize)
        let randomisedplacement = Math.floor((Math.random()*maxDisplacementHorizontal)+1)

        let makeIntoString = randomisedplacement+"px"

        let maxDisplacementVertical = Number.parseFloat(computedStyles.height) - Number.parseFloat(number.style.fontSize)
        let randomisedplacement2 = Math.floor((Math.random()*maxDisplacementVertical)+1)
        let makeIntoString2 = randomisedplacement2+"px"

        const currentCoords = (randomisedplacement,randomisedplacement2);
        if(isTooClose(currentCoords[0],currentCoords[1])){
            i--;
        }else{
            positions.push(currentCoords);
            number.style.position = "absolute"
            number.style.top = makeIntoString2
            number.style.left = makeIntoString
            number.style.zIndex = "5";
            box[0].appendChild(number)
        }

    }
}


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

const picker = document.getElementById("colourPicker")
const colourPickerForSymbols = document.getElementById("colourPickerForSymbols")

picker.addEventListener("input", () => {
    cut.style.backgroundColor = picker.value
    cut.style.borderColor = picker.value
})

let Resetbackground = document.getElementById("reset")
Resetbackground.addEventListener("click", () => {
    cut.style.backgroundColor = "#426f86"
    cut.style.borderColor = "#426f86"
})

colourPickerForSymbols.addEventListener("input", () => {
    console.log("symbol colour changed to: "+colourPickerForSymbols.value)
    const box = document.getElementsByTagName("span")
    for (const element of box) {
        element.style.color = colourPickerForSymbols.value
    }

    //runCommand()
})