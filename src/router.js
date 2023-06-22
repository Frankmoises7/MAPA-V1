const express = require("express");
const router = express.Router();
const TalleresController = require('./controllers/TalleresController')
const PageController = require('./controllers/PageController')
const SqlClient = require("./lib/SqlClient");

// Database Client
const sqlClient = new SqlClient()

//Controllers
const talleresController = new TalleresController(sqlClient)
const pageController = new PageController()


router.get('/', talleresController.renderHome)
router.get('/about', pageController.renderAbout)
router.get("/taller", talleresController.renderTalleres);
router.get('*', pageController.renderNotFound)

module.exports = router