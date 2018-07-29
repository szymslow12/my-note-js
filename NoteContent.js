"use strict";
import {storage} from "./Storage.js";
import { ButtonController } from "./ButtonController.js";

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
        titleContent.textContent = this.note.noteTitle;
        let removeButton = new ButtonController().getRemoveButton();
        removeButton.addEventListener("click", this.removeNote.bind(this));
        titleContent.appendChild(removeButton);
        this.title.appendChild(titleContent);
    }

    createNoteContent() {
        this.content = document.createElement("div");
        this.content.setAttribute("class", "note-content");
        let noteContent = document.createElement("textarea");
        noteContent.textContent = this.note.noteDescription;
        this.content.appendChild(noteContent);
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