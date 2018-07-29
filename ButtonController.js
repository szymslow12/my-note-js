"use strict";
import {Note} from "./Note.js";
import {NoteContent} from "./NoteContent.js";

export class ButtonController {
    constructor() {
    }

    createNewNoteButton(onClick) {
        let div = document.createElement("div");
        div.setAttribute("class", "new-note");
        document.getElementById("body").appendChild(div);
        this.getButton(onClick);
    }
    
    getButton(onClick) {
        let button = document.createElement("button");
        button.addEventListener("click", onClick)
        let date = document.createElement("p1");
        date.innerText = "New note";
        button.appendChild(date);
        document.getElementsByClassName("new-note").item(0).appendChild(button);
    }

    getRemoveButton() {
        let div = document.createElement("div");
        let button = document.createElement("button");
        let span = document.createElement("span");
        span.setAttribute("class", "remove-sign");
        button.setAttribute("class", "remove-button");
        button.appendChild(span);
        return button;
    }
}