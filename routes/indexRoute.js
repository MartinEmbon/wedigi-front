const express = require("express")
const router = express.Router()
const institucionalController = require("../controllers/institucionalController")

router.get("/",institucionalController.index)
router.get("/acao",institucionalController.acao)
router.get("/aventura",institucionalController.aventura)
router.get("/rpg",institucionalController.rpg)
router.get("/estrategia",institucionalController.estrategia)
router.get("/simulacao",institucionalController.simulacao)
router.get("/game_rdr",institucionalController.productBanner01)
router.get("/game_resident_evil",institucionalController.productBanner02)
router.get("/game_hitman",institucionalController.productBanner03)
router.get("/biblioteca",institucionalController.biblioteca)



module.exports = router