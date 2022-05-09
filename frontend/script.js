/* Scope */

let globalVariable1 = 12;

let globalVariable2 = function () {
    console.log("inside the function", globalVariable1);
    
    let funcVariable1 = "hello";
    
    let funcVariable2 = function () {
        console.log("inside the funcVariable2");
        console.log(globalVariable1);
        console.log(funcVariable1);
        
        let funcInFuncVariable1 = true;
        
        let funcInFuncVariablle2 = function() {
            console.log(funcInFuncVariable1)
        }
        
        funcInFuncVariablle2()
    }
    
    funcVariable2();
    
    console.log(funcVariable1);
    
    if(funcVariable1 === "hello") {
        var blockVariable1 = "Hisashiburi dana!"
    } else {
        /* console.log(blockVariable1) */
    }
    
    console.log(blockVariable1)
}

/* meghívom a globalVariable2 függvényt */

globalVariable2();

/* console.log(funcVariable1); */

/* Hoisting */

var varVariable = 1;
console.log(varVariable);

let letVariable1;
console.log(letVariable1);

let letVariable2 = "variable 2";
console.log(letVariable2);

const constVariable = "ciao";
/* constVariable = "hello"; */
console.log(constVariable);

const obj1 = {};

/* obj1.key = "value"; */

/* obj1 = {key: "value"}; */

/* console.log(obj1); */

const globalVariable3 = function (parameter1, parameter2, parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    /* console.log(parameter3); // függvényt ír ki */
    console.log(parameter3()) // lefuttatja a függvényt
}

const globalVariable4 = "random string";

const globalVariable5 = function () {
    return "pear"
}

const globalVariable6 = function () {
    return "Ducky McDuckFace"
}

globalVariable3(globalVariable5(), globalVariable4, globalVariable6);





const loadEvent = function (parameter1) {
    const rootElement = document.getElementById("root");
    
    console.log(rootElement);
    console.log(parameter1);
    //console.log(globalVariable1);
    rootElement.addEventListener("click", function (event) {
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", "clicked, ");
        event.currentTarget.classList.toggle("clicked")
    })
}

window.addEventListener("load", loadEvent)