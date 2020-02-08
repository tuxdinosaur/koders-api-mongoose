
const express = require('express')
// con minusculas los use cases
const koder = require('../use_cases/koder')

// Crear router
const router = express.Router()

// GET /koders -> getAll()
router.get('/', async (request, response) => {
  try {
    const koders = await koder.getAll()
    response.json({
      success: true,
      message: 'All koders',
      data: {
        koders
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
