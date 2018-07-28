"use strict";
import {storage} from "./Storage.js";

export class NoteContent {
    constructor(note) {
        this.note = note;
        this.title = this.createTitle(note);
        this.noteContent = this.createNoteContent(note.content);
    }

    createTitle(note) {
        let title = document.createElement("div");
        title.setAttribute("class", "note-title");
        let titleContent = document.createElement("p1");
        titleContent.setAttribute("contenteditable", "true");
        titleContent.textContent = note.title;
        titleContent.appendChild(this.getRemoveButton(note));
        title.appendChild(titleContent);
        return title;
    }

    createNoteContent(contentValue) {
        let content = document.createElement("div");
        content.setAttribute("class", "note-content");
        let noteContent = document.createElement("textarea");
        noteContent.textContent = contentValue;
        content.appendChild(noteContent);
        return content;
    }

    getRemoveButton(note) {
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
        return this.noteContent;
    }
}