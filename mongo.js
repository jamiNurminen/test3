
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb://japenurm:${password}@cluster0-shard-00-00.dnffi.mongodb.net:27017,cluster0-shard-00-01.dnffi.mongodb.net:27017,cluster0-shard-00-02.dnffi.mongodb.net:27017/note-app?ssl=true&replicaSet=atlas-xg4fe1-shard-0&authSource=admin&retryWrites=true`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

//Note.find({}).then(result => {
//    result.forEach(note => {
//      console.log(note)
//    })
//    mongoose.connection.close()
//  })
const note = new Note({
  content: 'Tuleeko tämä oikeaan paikkaan',
  date: new Date(),
  important: true,
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
}).catch(err => {
    console.log(err)
    mongoose.connection.close()
})
