const express = require('express')
const router = express.Router()
let coworkingsData = require('../db/coworkings')
const { Coworking } = require("../db/sequlizeSetup")
const { routerGetFindAll, createCoworking, searchCoworking } = require('../controllers/routeGet')
const { routeGetFindAllId, routePutFind, routeDeletFind, } = require("../controllers/routeGetId")
const { portect } = require('../middlewares/auth')
router
    .route('/')
    // route Git
    .get(routerGetFindAll)
    // route Post
    .post(portect, createCoworking)
router
    .route('/search')
    .get(searchCoworking)

router
    .route('/:id')
    .get(routeGetFindAllId)
    .put(portect, routePutFind)
    .delete(portect, routeDeletFind)


module.exports = router


// .post(async (req, res) => {

// const newCoworking = req.body
// // const newId = on récupère le dernier élément du tableau, on prend son id, on lui ajoute 1 et on met ça dans newId
// const newId = coworkingsData[coworkingsData.length - 1].id + 1
// newCoworking.id = newId
// newCoworking.created = new Date()
// // Ajoutons une date à la création du coworking
// coworkingsData.push(newCoworking)
//     try {
//         const newcoworking = await Coworking.create(req.body)

//         res.status(201).json({ message: `Un coworking a bien été ajouté`, data: newcoworking })
//     } catch (error) {
//         res.status(500).json({ message: `Une erreur est survenue`, data: error })
//     }

// })

//     async (req, res) => {
//     try {
//         const newcoworking = await Coworking.findByPk(req.params.id)
//         if (!newcoworking) {
//             res.status(404).json({ message: `Le coworking recherché n'existe pas` })

//         }
//         res.status(201).json({ message: `your coworking is existe `, data: newcoworking })
//     } catch (error) {
//         res.status(500).json({ message: `Une erreur est survenue` })
//     }
// }


// const msg = result ? `Nom du coworking n°${result.id} : ${result.name}` : `Le coworking recherché n'existe pas`

// res.json({ message: msg, data: result })

// async (req, res) => {
//     try {
//         const result = await Coworking.findByPk(req.params.id)
//         if (!result) {
//             return res.status(404).json({ message: `error le coworking recherché n'existe pas ` })

//         }
//         result.update(req.body)
//         res.status(201).json({ message: 'Le coworking a bien été modifié', data: result })
//     }
//     catch (error) {
//         res.status(500).json({ message: `Une erreur est survenue ` })

//     }
// }