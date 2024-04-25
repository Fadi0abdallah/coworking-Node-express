const { User } = require("../db/sequlizeSetup")
const bcrypt = require("bcrypt");
const { errorValidationConstraint } = require("../errorHandler/errorValidationCostraint")



const createNewUser = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword
        const newUsre = await User.create(req.body)
        res.status(201).json({ message: `Welcome ${newUsre.username}`, data: newUsre })

    } catch (error) {

        errorValidationConstraint(error, res, "nom de User")
    }
}
const findAllUsers = async (req, res) => {
    try {
        const newUser = await User.findByPk(req.params.id)
        if (!newUser) {
            res.status(404).json({ message: `Le User recherché n'existe pas` })

        }
        res.status(201).json({ message: `your User is existe `, data: newUser })

    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue` })

    }
}
const allUsers = async (req, res) => {

    try {

        const findAllusers = await User.findAll()
        res.status(201).json({ message: `All Users `, data: findAllusers })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue` })

    }
}
const deleteUser = async (req, res) => {
    try {

        const deleteUsres = await User.findByPk(req.params.id)


        deleteUsres.destroy(req.params)
        res.status(201).json({ message: `delelt is Done`, Data: deleteUsres })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue` })

    }
}
module.exports = { createNewUser, findAllUsers, allUsers, deleteUser }