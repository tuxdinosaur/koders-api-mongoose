
// Los modelos se importan con mayúsculas
const Koder = require('../models/koder')

// Create
function create ({ name, birthDate, gender, email }) {
  // Crear nuevo Koder
  const newKoder = new Koder({ name, birthDate, gender, email })
  // Guardar en la base de datos, .save es una promesa de guardado
  newKoder.save()
}

// Read all
function getAll () {
  return Koder.find({})
}

// Read by Id
function getById (id) {
  return Koder.findById(id)
}

// Update
function updateById (id, koderToUpdate) {
  return Koder.findByIdAndUpdate(id, koderToUpdate)
}

// Delete
function deletebyId (id) {
  return Koder.findByIdAndDelete(id)
}

module.exports = {
  create,
  deletebyId,
  getAll,
  getById,
  updateById
}
