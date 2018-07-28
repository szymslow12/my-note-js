"use strict";
//import {storage} from "./Storage.js";


let createNewNoteButton = () => {
    let div = document.createElement("div");
    div.setAttribute("class", "note");
    document.getElementById("body").appendChild(div);
    getButton();
}

let getButton = () => {
    let button = document.createElement("button");
    button.setAttribute("onclick", "onClick()");
    let date = document.createElement("p1");
    date.innerText = "My Notes";
    button.appendChild(date);
    document.getElementsByClassName("note").item(0).appendChild(button);
};

function onClick() {
    console.log("clicked");
}