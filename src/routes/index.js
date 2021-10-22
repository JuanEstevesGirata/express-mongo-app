const {Router} = require('express')
const loginRouter = require('../controllers/login')
const {home, getNotes, postNotes, getNote, putNote, deleteNote} = require('../controllers/notes')
const usersRouter = require('../controllers/users')
const handleErrors = require('../middleware/handleErrors')
const notFound = require('../middleware/notFound')

const router = Router();
  
  router.get('/', home)
  
  router.get('/api/notes', getNotes)
    
  router.get ('/api/notes/:id', getNote)

  router.put('/api/notes/:id', putNote)

  router.delete('/api/notes/:id', deleteNote)

  router.post('/api/notes', postNotes)

  router.use('/api/users', usersRouter)

  router.use('/api/login', loginRouter)

  router.use(notFound)
  router.use(handleErrors)





module.exports =  router;  