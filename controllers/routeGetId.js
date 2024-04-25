const { Coworking } = require("../db/sequlizeSetup")
const { errorValidationConstraint } = require("../errorHandler/errorValidationCostraint")


const routeGetFindAllId = async (req, res) => {
    try {
        const newcoworking = await Coworking.findByPk(req.params.id)
        if (!newcoworking) {
            res.status(404).json({ message: `Le coworking recherché n'existe pas` })

        }
        res.status(201).json({ message: `your coworking is existe `, data: newcoworking })

    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue` })

    }
}

const routePutFind = async (req, res) => {
    try {
        const result = await Coworking.findByPk(req.params.id)
        if (!result) {
            return res.status(404).json({ message: `error le coworking recherché n'existe pas ` })

        }
        await result.update(req.body)
        res.status(201).json({ message: 'Le coworking a bien été modifié', data: result })
    }
    catch (error) {
        errorValidationConstraint(error, res, "nom  de coworking")

    }
}
const routeDeletFind = async (req, res) => {
    try {
        const result = await Coworking.findByPk(req.params.id)
        if (!result) {
            return res.status(404).json({ message: `error le coworking  n'existe pas ` })

        }
        result.destroy(req.body)
        res.status(202).json({ message: 'Le coworking a bien été supprimé', data: result })
    }
    catch (error) {
        res.status(500).json({ message: `Une erreur est survenue ` })

    }
}
module.exports = {
    routeGetFindAllId, routePutFind, routeDeletFind
}