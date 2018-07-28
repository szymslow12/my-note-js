"use strict";
//import {storage} from "./Storage.js";
import {Note} from "./Note.js";

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
    fillContainerWithNotes(container);
    document.getElementById("body").appendChild(container);
};

function fillContainerWithNotes(container) {
    let note = new Note("Very long Title needed to check if everything works fine", "Note content");
    container.appendChild(note.createHTMLNote());
    note = new Note("Title", "Note content");
    container.appendChild(note.createHTMLNote());
}

createNewNoteButton();
createNoteContainer();