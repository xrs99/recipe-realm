const controllers = require('../controllers/recipes.ts')
const router = require('express').Router()

router.get('/', controllers.getAllRecipes)

module.exports = router