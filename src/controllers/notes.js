const notesRouter = require('express').Router()
const Note = require('../models/Note')



const home = (request, response) => {
    response.send('<h1>Hello World!</h1>')
  }

module.exports = {home}


//   notesRouter.get('/', (request, response) => {
//     Note.find({}).then(notes => {
//     response.json(notes)
//     })
//   })

    
// notesRouter.get ('/', (request, response, next) => {
//   const { id } = request.params
//   Note.findById(id)
//     .then(note => {
//       if (note) return response.json(note)
//       response.status(404).end()
//       })
//     .catch(err => next(err))
//   })


//   notesRouter.put('/', (request, response, next) => {
//     const { id } = request.params
//     const note = request.body
  
//     const newNoteInfo = {
//       content: note.content,
//       important: note.important
//     }
  
//     Note.findByIdAndUpdate(id, newNoteInfo, { new: true }) //Return new value
//       .then(result => {
//         response.json(result)
//       })
//       .catch(next)
//   })


//   notesRouter.delete('/', (request, response, next) => {
//     const { id } = request.params
  
//     Note.findByIdAndDelete(id)
//       .then(() => response.status(204).end())
//       .catch(next)
//   })
  

//   notesRouter.post('/', (request, response, next) => {
//     const note = request.body
  
//     if (!note.content) {
//       return response.status(400).json({
//         error: 'required "content" field is missing'
//       })
//     }
  
//     const newNote = new Note({
//       content: note.content,
//       date: new Date(),
//       important: note.important || false
//     })
  
//     newNote.save().then(savedNote => {
//       response.json(savedNote)
//     }).catch(err => next(err))
//   })
