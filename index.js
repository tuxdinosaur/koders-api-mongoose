const db = require('./src/lib/db')

// Importar server
const server = require('./src/server')

db
  .then(() => {
    console.log('Server ON')
    console.log('Aqui se levanta el servidor')
    server.listen(8080, () => {
      console.log('Server running')
    })
  })
  .catch(error => {
    console.log('Too bad', error)
  })
