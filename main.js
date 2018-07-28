"use strict";
import {storage} from "./Storage.js";
import {Note} from "./Note.js";

let createNewNoteButton = () => {
    let div = document.createElement("div");
    div.setAttribute("class", "new-note");
    document.getElementById("body").appendChild(div);
    getButton();
}

let getButton = () => {
    let button = document.createElement("button");
    button.addEventListener("click", onClick)
    let date = document.createElement("p1");
    date.innerText = "New note";
    button.appendChild(date);
    document.getElementsByClassName("new-note").item(0).appendChild(button);
};

function onClick() {
    let note = new Note("New note!", "New note content!!");
    let noteContainer = document.getElementById("container");
    noteContainer.appendChild(note.createHTMLNote());
    storage.add(note);
}

let createNoteContainer = () => {
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    container.setAttribute("class", "note-container");
    fillContainerWithNotes(container);
    document.getElementById("body").appendChild(container);
};

function fillContainerWithNotes(container) {
    for (let note of storage.notes) {
        container.appendChild(note.createHTMLNote());
    }
}

function clearLocalStorageNotes() {
    for (let note of storage.notes) {
        storage.remove(note);
    }
}
//clearLocalStorageNotes();
createNewNoteButton();
createNoteContainer();
