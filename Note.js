"use strict";

import {NoteContent} from "./NoteContent.js";

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
        note.appendChild(title);
        note.appendChild(content);
        return note;
    }

    static createFromObject(object) {
        let note = new Note(object.title, object.content);
        return note;
    }
}