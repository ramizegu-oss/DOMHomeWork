"use strict";

let buttonAdd = document.querySelector("main button");
let input = document.querySelector("main input");
let ulList = document.querySelector("main ul");
let deleteBtn = document.querySelectorAll("main ul li i");



buttonAdd.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerHTML = `<p>${input.value}</p>`;
    li.classList.add("list-group-item");
    li.classList.add("li-desing");

    let iconDel = document.createElement("i");
    iconDel.classList.add("fa-solid");
    iconDel.classList.add("fa-trash-can");
    iconDel.classList.add("delete-icon");

    iconDel.addEventListener("click",function(){
        iconDel.parentElement.remove();
    })

    li.append(iconDel);
    ulList.append(li);
    input.value = ""
});


deleteBtn.forEach(element => {
    element.addEventListener("click",function(){
    let parentLi = element.parentElement;
    parentLi.remove();
})
});
