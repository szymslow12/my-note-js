"use strict";

import {NoteContent} from "./NoteContent.js";
import {storage} from "./Storage.js";

export class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    createHTMLNote() {
        let note = document.createElement("div");
        note.setAttribute("class", "note");
        let noteContent = new NoteContent(this);
        let title = noteContent.getTitle();
        let content = noteContent.getNoteContent();
        this.setEventListeners(title, content);
        note.appendChild(title);
        note.appendChild(content);
        return note;
    }

    static createFromObject(object) {
        let note = new Note(object.title, object.content);
        return note;
    }

    setEventListeners(title, content) {
        title.addEventListener("input", this.listenToTitle.bind(this));
        content.addEventListener("input", this.listenToContent.bind(this));
    }

    listenToTitle(title) {
        this.title = title.target.innerText;
        storage.save()
    }

    listenToContent(content) {
        this.content = content.target.value;
        storage.save();
    }
}