import {Router} from 'express';
import { getHome } from '../controllers';
import handleErrors from '../middleware/handleErrors';
import notFound from '../middleware/notFound';

const router = Router();
import Note from '../models/Note';

// router.get('/home', getHome)


  
  router.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  

  router.get('/api/notes', (request, response) => {
    
    Note.find({}).then(notes => {
        response.json(notes)
    })
    
  })

    
  router.get('/api/notes/:id', (request, response, next) => {
    const { id } = request.params
  
    Note.findById(id)
      .then(note => {
        if (note) return response.json(note)
        response.status(404).end()
      })
      .catch(err => next(err))
  })


  router.put('/api/notes/:id', (request, response, next) => {
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
  })


  router.delete('/api/notes/:id', (request, response, next) => {
    const { id } = request.params
  
    Note.findByIdAndDelete(id)
      .then(() => response.status(204).end())
      .catch(next)
  })
  

  router.post('/api/notes', (request, response, next) => {
    const note = request.body
  
    if (!note.content) {
      return response.status(400).json({
        error: 'required "content" field is missing'
      })
    }
  
    const newNote = new Note({
      content: note.content,
      date: new Date(),
      important: note.important || false
    })
  
    newNote.save().then(savedNote => {
      response.json(savedNote)
    }).catch(err => next(err))
  })

  
  router.use(notFound)

    // app.use(Sentry.Handlers.errorHandler())
  router.use(handleErrors)





export default router;  