"use strict";
//import {storage} from "./Storage.js";


let createNewNoteButton = () => {
    let div = document.createElement("div");
    div.setAttribute("class", "new-note");
    document.getElementById("body").appendChild(div);
    getButton();
}

let getButton = () => {
    let button = document.createElement("button");
    button.setAttribute("onclick", "onClick()");
    let date = document.createElement("p1");
    date.innerText = "New note";
    button.appendChild(date);
    document.getElementsByClassName("new-note").item(0).appendChild(button);
};

function onClick() {
    console.log("clicked");
}

let createNoteContainer = () => {
    let container = document.createElement("div");
    container.setAttribute("class", "note-container");
    //ToDo: fillContainerWithNotes(container);
    document.getElementById("body").appendChild(container);
};