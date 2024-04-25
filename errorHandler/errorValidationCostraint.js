const { UniqueConstraintError, ValidationError } = require("sequelize")

const errorValidationConstraint = (error, res, msg) => {

    if (error instanceof UniqueConstraintError) {
        return res.status(400.).json({ data: error.message })
    }
    if (error instanceof ValidationError) {
        return res.status(400).json({ data: error.message })
    }
    res.status(500).json({ message: `Une erreur est survenue`, data: error })

}

module.exports = { errorValidationConstraint }