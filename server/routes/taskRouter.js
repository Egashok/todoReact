const Router = require('express')
const router = new Router()
const taskController = require('../controllers/taskController')



router.post('/',taskController.create)
router.get('/:date',taskController.getAll)
router.get('/item/:id',taskController.getOne)
router.delete('/item/:id',taskController.remove)

module.exports = router