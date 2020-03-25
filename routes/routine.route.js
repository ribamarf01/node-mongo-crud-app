const express = require('express')
const router = express.Router()
const controller = require('../controllers/routine.controller')

router.get('/testar', controller.test)
router.get('/index', controller.index)
router.post('/create', controller.create)
router.get('/:id', controller.details)
router.put('/:id/update', controller.edit)
router.delete('/:id/delete', controller.delete)

module.exports = router