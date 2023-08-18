const express = require('express')
const notes = require('./notes')

const port = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');



app.route('/')
    .get((req, res) => {
        const allNotes = notes.getNotesFromJSON()
        res.render('createNote', { 'notes': allNotes })
    })
    .post((req, res) => {
        notes.createNote(req.body['note'])
        res.redirect('/')
    })

app.delete('/delete', ((req, res) => {
    const noteID = Number(req.body['noteId'])
    notes.deleteNote(noteID)
    res.redirect('/')
}))



app.listen(port, () => {
    console.log(`listening on port : ${port}`)
})