const Note = require('../models/Note')
const User = require('../models/User')


const home = (request, response) => {
    response.send('<h1>Hello World!</h1>')
}

const getNotes = async (request, response) => {
    const notes = await Note.find({}).populate('user', {
      username: 1,
      name: 1
    })
    response.json(notes)
}

const getNote = (request, response, next) => {
  const { id } = request.params
  
  Note.findById(id)
    .then(note => {
      if (note) return response.json(note)
      response.status(404).end()
    })
    .catch(err => next(err))
}

const putNote = (request, response, next) => {
  const { id } = request.params
  const note = request.body
  
  const newNoteInfo = {
    content: note.content,
    important: note.important
  }
  
  Note.findByIdAndUpdate(id, newNoteInfo, { new: true }) //Return new value
    .then(result => {
      response.json(result)
    })
    .catch(next)
}

const deleteNote =  (request, response, next) => {
  const { id } = request.params
  Note.findByIdAndDelete(id)
    .then(() => response.status(204).end())
    .catch(next)
}


const postNotes = async(request, response, next) => {
  const {content, important = false, userId} = request.body
  
  const user = await User.findById(userId)

  if (!content) {
    return response.status(400).json({
      error: 'required "content" field is missing'
    })
  }

  const newNote = new Note({
    content,
    date: new Date(),
    important,
    user : user._id
  })

  console.log(user)

//   newNote.save().then(savedNote => {
//     response.json(savedNote)
//   }).catch(err => next(err))

  try {
    const savedNote = await newNote.save()

    user.notes = user.notes.concat(savedNote._id)
    await user.save()

    response.json(savedNote)

  } catch (error) {
    next(error)
  }
}




module.exports = {home, postNotes, getNotes, getNote, putNote, deleteNote}


