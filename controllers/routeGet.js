
const { UniqueConstraintError, ValidationError, Op } = require("sequelize")
const { Coworking } = require("../db/sequlizeSetup")
const { errorValidationConstraint } = require("../errorHandler/errorValidationCostraint")
const { Jwt } = require("jsonwebtoken")




const routerGetFindAll = async (req, res) => {
    try {
        const newcoworking = await Coworking.findAll()

        res.json({ message: `Il y a ${newcoworking.length} coworkings`, data: newcoworking })

    }

    catch (error) {
        res.status(401).json({ message: `your data  doesn't exist` })
    }
}
const searchCoworking = async (req, res) => {
    try {
        const newcoworking = await Coworking.findAll({
            where:
            {
                name:
                    { [Op.like]: `%${req.query.name}%` }
            }
        })

        res.json({ message: `Il y a ${newcoworking.length} coworkings`, data: newcoworking })

    } catch (error) {
        res.status(401).json({ message: `your data  doesn't exist` })

    }

}
const createCoworking = async (req, res) => {
    //"si on a un token  vailde dans le cookies du client alor on a la droit de creer un coworking

    try {

        const newcoworking = await Coworking.create(req.body)
        res.status(201).json({ message: `Un coworking a bien été ajouté`, data: newcoworking })

    } catch (error) {
        errorValidationConstraint(error, res, "nom de coworking")
    }
}

module.exports = { routerGetFindAll, createCoworking, searchCoworking }