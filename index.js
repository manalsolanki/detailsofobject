const selectedTank = document.getElementById("selectedTank");
const selectedFurnace = document.getElementById("selectedFurnace");
const furnaceContainer = document.getElementById("furnaceContainer");
const tankContainer = document.getElementById("tankContainer")

selectedTank.addEventListener("click", (event) => {
    tankContainer.style.display = "flex";
    furnaceContainer.style.display = "none";
})

selectedFurnace.addEventListener("click", (event) => {
    tankContainer.style.display = "none";
    furnaceContainer.style.display = "flex";
})

const furance = document.getElementById("furance");
const thickness = document.getElementById("thickness");
const life = document.getElementById("life");
const arrowFurnace = document.getElementById("arrowFurnace");
furanceHeight = furance.height;
furanceWidth = furance.width;

console.log(arrowFurnace)
const tank = document.getElementById("tank");
const thicknessTank = document.getElementById("thicknessTank");
const lifeTank = document.getElementById("lifeTank");
const arrowTank = document.getElementById("arrowTank");
tankHeight = tank.height;
tankWidth = tank.width;


// const a = document.getElementById("tree");
// const text = document.getElementById("text");
// imgWidth = a.width;
// imgheight = a.height;



furance.addEventListener("click", (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    if (y < (furanceHeight / 2)) {
        if (x < (furanceWidth / 2)) {
            thickness.innerHTML = "x ";
            life.innerHTML = "2 ";
        }
        else {
            thickness.innerHTML = "y ";
            life.innerHTML = "2.5 ";
        }
    }
    else {
        if (x < (furanceWidth / 2)) {
            thickness.innerHTML = "z";
            life.innerHTML = "3 ";
        }
        else {
            thickness.innerHTML = "xx ";
            life.innerHTML = "1.5 ";
        }

    }
})
furance.addEventListener("mousemove", (event) => {
    console.log("hi")
    let x = event.offsetX;
    let y = event.offsetY;
    arrowFurnace.style.visibility = "visible";
    arrowFurnace.style.top = `${y}px`;
    arrowFurnace.style.left = `${x}px`;
    if (y < (furanceHeight / 2)) {
        if (x < (furanceWidth / 2)) {
            arrowFurnace.innerHTML = "x mm";
            console.log("x")
        }
        else {
            arrowFurnace.innerHTML = "y mm";
        }
    }
    else {
        if (x < (furanceWidth / 2)) {
            arrowFurnace.innerHTML = "z mm";
        }
        else {
            arrowFurnace.innerHTML = "xx mm";
        }

    }
})
furance.addEventListener("mouseout", (event) => {
    arrowFurnace.style.visibility = "hidden";
})


tank.addEventListener("click", (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    if (y < (tankHeight / 2)) {
        if (x < (tankWidth / 2)) {
            thicknessTank.innerHTML = "x ";
            lifeTank.innerHTML = "2 ";
        }
        else {
            thicknessTank.innerHTML = "y ";
            lifeTank.innerHTML = "2.5 ";
        }
    }
    else {
        if (x < (tankWidth / 2)) {
            thicknessTank.innerHTML = "z";
            lifeTank.innerHTML = "3 ";
        }
        else {
            thicknessTank.innerHTML = "xx ";
            lifeTank.innerHTML = "1.5 ";
        }

    }
})



tank.addEventListener("mousemove", (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    arrowTank.style.visibility = "visible";
    arrowTank.style.top = `${y}px`;
    arrowTank.style.left = `${x}px`;
    if (y < (tankHeight / 2)) {
        if (x < (tankWidth / 2)) {
            arrowTank.innerHTML = "x mm";
        }
        else {
            arrowTank.innerHTML = "y mm";
        }
    }
    else {
        if (x < (tankWidth / 2)) {
            arrowTank.innerHTML = "z mm";
        }
        else {
            arrowTank.innerHTML = "xx mm";
        }

    }
})
tank.addEventListener("mouseout", (event) => {
    arrowTank.style.visibility = "hidden";
})
