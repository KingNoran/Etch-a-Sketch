let size = 16;
const containerSize = 700;
let boxSize = containerSize/size;
let boxColor = "red";

// Create and target Elements

const body = document.querySelector("body");
    const title = document.createElement("div");
    const userInput = document.createElement("div");
    const main_container = document.createElement("div");
        const color_nav = document.createElement("div");
        const box_container = document.createElement("div");
    const resetButton = document.createElement("button");

// Functions
const setBoxSize = ()=>{
    boxSize = containerSize/size;
}

const setInput= ()=>{
    const input = document.createElement("input");
    input.classList.add("userInput");
    const generate = document.createElement("button");
    generate.classList.add("generate");
    userInput.textContent = "How much area do you want?: ";
    input.style.textAlign = "center";
    generate.textContent = "Generate";
    userInput.appendChild(input);
    userInput.appendChild(generate);
}

const setColors = ()=>{
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    colors.forEach((color, index)=>{
        const div = document.createElement("div");
        div.classList.add("color");
        div.style.backgroundColor = `${color}`;
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.margin = "1rem";
        div.style.boxSizing = "border-box"
        color_nav.appendChild(div);
    });
}

const setBoxes = ()=>{
    for (let i = 0; i < (size * size); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.background = "white";
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        square.style.border = "1px solid black"
        box_container.appendChild(square);
        box_container.style.gridTemplateColumns = `repeat(${size}, ${boxSize}px)`;
        box_container.style.gridTemplateRows = `repeat(${size}, ${boxSize}px)`;  
    }
}

// Apply Styles
    //body
    body.style.backgroundColor = "#f3f3f3";
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.fontFamily = "Segoe UI";


        // title
        title.textContent = "Etch-A-Sketch";
        title.style.fontSize = "4rem";

        // user input
        userInput.style.padding = "3rem";
        userInput.style.fontStyle = "italic";
        userInput.style.border = "1px solid black"
        userInput.style.marginBottom = "1rem";
        userInput.style.display = "flex";
        userInput.style.gap = "1rem";

        // main container
        main_container.classList.add("container");
        main_container.style.backgroundColor = "#333";
        main_container.style.display = "flex";
        main_container.style.borderRadius = "2cap";
        main_container.style.padding = "1rem";
        main_container.style.gap = "3rem";

            // color pallete
            color_nav.style.backgroundColor = "#666";
            color_nav.style.justifyContent = "center";
            color_nav.style.alignItems = "center";
            color_nav.style.flexDirection = "column";
            color_nav.style.display = "flex";
            color_nav.style.borderRadius = "1cap";
            color_nav.style.border = "3px solid black";
            color_nav.style.boxSizing = "border-box";
            color_nav.style.width = "5rem";
            color_nav.style.height = "36rem";
            setColors();

            // box container
            box_container.style.width = `${containerSize + 2}px`;
            box_container.style.height = `${containerSize + 2}px`;
            box_container.style.backgroundColor = "#666";
            box_container.style.border = "3px solid black";
            box_container.style.display = "grid";
            box_container.style.flexWrap = "wrap";
            box_container.style.justifyContent = "flex-start";
            box_container.style.alignItems = "flex-start";
            box_container.style.gridTemplateColumns = `repeat(${size}, ${boxSize}px)`;
            box_container.style.gridTemplateRows = `repeat(${size}, ${boxSize}px)`;    
            setBoxes();
    





// Append Children

main_container.appendChild(color_nav);
main_container.appendChild(box_container);
body.appendChild(title);
setInput();
body.appendChild(userInput);
body.appendChild(main_container);


// Events
document.querySelectorAll("div.color").forEach(item=>{
    setInterval(()=>{
        if(item.matches(':hover')){
            item.style.cursor = "pointer";
            item.style.border = "5px solid white";
        } else {
            item.style.border = "1px solid white";
        }
    }, 0)
});

document.querySelectorAll("div.color").forEach(item=>{
    item.addEventListener("click", ()=>{
        boxColor = window.getComputedStyle(item).backgroundColor;
    });
});


document.querySelectorAll("div.square").forEach(item=>{
    setInterval(()=>{
        if(item.matches(':hover')){
            item.style.backgroundColor = boxColor;
        }
    }, 0)
});

document.querySelector("button.generate").addEventListener("click",()=>{
    const input = document.querySelector("input.userInput");
    if (input.value > 100 || input.value < 0){
        alert("We only accept numbers 1 - 100!");
        size = 16;
    }
    size = input.value;
    document.querySelectorAll("div.square").forEach(item=>{
        item.remove();
    });
    setBoxSize();
    setBoxes();
});