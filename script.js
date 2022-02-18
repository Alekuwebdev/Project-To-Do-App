"use strict";

// Ich erhalte die erforderlichen Elemente mit querySelector
const button_1 = document.querySelector("#add-task-btn");
const ul = document.querySelector("#tasks");
const input_1 = document.querySelector("#input-task");


// event für button_1
button_1.addEventListener("click", () => {

     // li erstellen
     const li = document.createElement("li");
    
    // checkbox erstellen
    const checkbox = document.createElement("input");

    // span erstellen
    const span = document.createElement("span");

    // if abfrage für input_1
    if(!input_1.value <= 0) {
        
        // li append
        ul.appendChild(li);

        // checkbox
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        // span append
        li.appendChild(span);
        span.innerText = input_1.value;
        span.style.marginLeft = "1rem";


        // style li
        li.style.listStyleType = "none";
        li.style.padding = "1rem";
        li.style.border = "1px solid gray";

        // style checkbox
        checkbox.style.float = "left";
        checkbox.style.margin = "0.3rem";
    }

    // button_2 erstellen
    const button_2 = document.createElement("button");
    button_2.innerText = "❌";

    // button_2 event
    button_2.addEventListener("click", () => {
        li.remove();
    })

    // style button_2
    button_2.style.float = "right";

    // event für checkbox
    checkbox.addEventListener("click", () => {
        
        // if abfrage für checkbox
        if(checkbox.checked) {
            li.appendChild(button_2);
        } else {
            button_2.remove();
        }
    })

    // input_2 erstellen
    const input_2 = document.createElement("input");

    // button_3 erstellen
    const button_3 = document.createElement("button");
    button_3.innerText = "🟢";

    // Style 
    button_3.style.marginLeft = "1rem"

    // event für span
    span.addEventListener("dblclick", () => {
        li.appendChild(input_2);
        li.appendChild(button_3);
        span.remove();

        // Style
        input_2.style.border = "1px solid gray";
        input_2.style.marginLeft = "1rem";
        input_2.style.width = "70%";
    })

    // newSpan
    const newSpan = document.createElement("span");

    // event für button_3
    button_3.addEventListener("click", () => {

        if(!input_2.value <= 0) {
            li.appendChild(span);
            span.innerText = input_2.value;
            input_2.remove();
            button_3.remove();

            // Style
            button_3.style.float = "right";
            span.style.marginLeft = "1rem";
        }  
    })
})

const div = document.querySelector(".tasker-body");
div.style.boxShadow = "11px -50px 60px gray";
input_1.style.boxShadow = "65px -30px 60px gray";



