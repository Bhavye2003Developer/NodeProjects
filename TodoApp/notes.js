const fs = require('fs')

function getNotesFromJSON() {
    const notes = JSON.parse(fs.readFileSync('notes.json', { encoding: 'utf-8' }))
    return notes
}

function createNote(note) {
    const notes = getNotesFromJSON()
    ++notes['numberOfNotes']
    notes['notes'].push({
        id: notes['numberOfNotes'],
        note
    })
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}


function deleteNote(noteID) {
    const notes = getNotesFromJSON()
    const noteIndex = notes['notes'].map(note => {
        return note['id']
    }).findIndex((index) => index == noteID)
    if (noteIndex != -1) {
        notes['notes'].splice(noteIndex, 1)
    }
    --notes['numberOfNotes']
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}


console.log(getNotesFromJSON())

module.exports = { getNotesFromJSON, createNote, deleteNote }