const mongoose = require('mongoose')

// Nombre del modelo y esquema
// Los modelos representan las colecciones

const koderSchema = new mongoose.Schema({
  // Atributos que va a tener el koder
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true, // trim quita espacios al principio y al final
    // g = global, m = multiline, i = case sensitive, van después de la última diagonal ('/')
    // match: /.*/ gim
    toLoweCase: true
  },
  email: {
    type: String,
    minlength: 5,
    // REGEX, debe ir entre '/' y '/'
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+ /i,
    toLoweCase: true,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    // Lista de valores válidos
    enum: ['m', 'f', 'n']
  }
})

module.exports = mongoose.model('Koders', koderSchema)
