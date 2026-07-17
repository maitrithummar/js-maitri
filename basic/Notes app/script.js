const noteInput = document.getElementById('note-input');
const addBtn = document.getElementById('add-btn');
const notesContainer = document.getElementById('notes-container');

document.addEventListener('DOMContentLoaded', loadNotes);

addBtn.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    
    if (noteText === '') {
        alert('Kuch toh likho dost! Khali note add nahi ho sakta.');
        return;
    }

    createNoteCard(noteText);
    saveNoteToStorage(noteText);
    
    noteInput.value = '';
});

function createNoteCard(text) {
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    const p = document.createElement('p');
    p.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
        noteCard.remove();
        deleteNoteFromStorage(text);
    });

    noteCard.appendChild(p);
    noteCard.appendChild(deleteBtn);
    notesContainer.appendChild(noteCard);
}

function saveNoteToStorage(note) {
    let notes = getNotesFromStorage();
    notes.push(note);
    localStorage.setItem('myNotes', JSON.stringify(notes));
}

function getNotesFromStorage() {
    let notes;
    if (localStorage.getItem('myNotes') === null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('myNotes'));
    }
    return notes;
}

function loadNotes() {
    const notes = getNotesFromStorage();
    notes.forEach(note => {
        createNoteCard(note);
    });
}

function deleteNoteFromStorage(noteToDelete) {
    let notes = getNotesFromStorage();
    notes = notes.filter(note => note !== noteToDelete);
    localStorage.setItem('myNotes', JSON.stringify(notes));
}