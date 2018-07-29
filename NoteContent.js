"use strict";
import {storage} from "./Storage.js";

export class NoteContent {
    constructor(note) {
        this.note = note;
        this.createTitle();
        this.createNoteContent();
    }

    createTitle() {
        this.title = document.createElement("div");
        this.title.setAttribute("class", "note-title");
        let titleContent = document.createElement("p1");
        titleContent.setAttribute("contenteditable", "true");
        titleContent.textContent = this.note.title;
        titleContent.appendChild(this.getRemoveButton());
        this.title.appendChild(titleContent);
    }

    createNoteContent() {
        this.content = document.createElement("div");
        this.content.setAttribute("class", "note-content");
        let noteContent = document.createElement("textarea");
        noteContent.textContent = this.note.content;
        this.content.appendChild(noteContent);
    }

    getRemoveButton() {
        let div = document.createElement("div");
        let button = document.createElement("button");
        let span = document.createElement("span");
        span.setAttribute("class", "remove-sign");
        button.setAttribute("class", "remove-button");
        button.appendChild(span);
        button.addEventListener("click", this.removeNote.bind(this));
        return button;
    }

    removeNote(actualButton) {
        actualButton.target.closest(".note").remove();
        storage.remove(this.note)
    }

    getTitle() {
        return this.title;
    }

    getNoteContent() {
        return this.content;
    }
}