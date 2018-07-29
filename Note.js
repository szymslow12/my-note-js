"use strict";

import {NoteContent} from "./NoteContent.js";
import {storage} from "./Storage.js";

export class Note {
    constructor(title, content) {
        this.noteTitle = title;
        this.noteDescription = content;
    }

    createHTMLNote(noteContent) {
        let note = document.createElement("div");
        let title = noteContent.getTitle();
        let content = noteContent.getNoteContent();
        this.setEventListeners(title, content);
        this.setNoteView(note, title, content);
        return note;
    }

    static createFromObject(object) {
        let note = new Note(object.noteTitle, object.noteDescription);
        return note;
    }

    setNoteView(note, title, content) {
        note.setAttribute("class", "note");
        note.appendChild(title);
        note.appendChild(content);
    }

    setEventListeners(title, content) {
        title.addEventListener("input", this.listenToTitle.bind(this));
        content.addEventListener("input", this.listenToContent.bind(this));
    }

    listenToTitle(title) {
        this.noteTitle = title.target.innerText;
        storage.save()
    }

    listenToContent(content) {
        this.noteDescription = content.target.value;
        storage.save();
    }
}