function saveUserNote(content) {
    localStorage.setItem("note", content);
}

function getUserNote() {
    if (localStorage.getItem("note")) {
        return localStorage.getItem("note");
    }
    return "";
}

export { saveUserNote, getUserNote };
