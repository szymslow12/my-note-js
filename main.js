"use strict";
import {storage} from "./Storage.js";
import {Note} from "./Note.js";
import {ButtonController} from "./ButtonController.js";

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

function createNewNote() {
    let note = new Note("New note!", "New note content!!");
    let noteContainer = document.getElementById("container");
    noteContainer.appendChild(note.createHTMLNote());
    storage.add(note);
}

clearLocalStorageNotes();
new ButtonController().createNewNoteButton(createNewNote);
createNoteContainer();
