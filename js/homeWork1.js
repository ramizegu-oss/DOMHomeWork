"use strict";

let input = document.querySelector(".input");
let button = document.querySelector(".btn");
let ul = document.querySelector(".ul-list");


button.addEventListener("click",function(){
    let count = Number(input.value);
    for (let i = 1; i <= count; i++) {
        let li  = document.createElement("li");
        li.textContent = i
        li.classList.add("list-group-item");
        ul.append(li);
    }
})
