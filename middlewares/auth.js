const { SECREY_KEY } = require("../configs/privatekey")
const jwt = require('jsonwebtoken')


const portect = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) {
        return res.status
            (401).json({ meassage: "not anthentifie" })
    }
    try {
        const decoded = jwt.verify(token, SECREY_KEY)
        next()

    } catch (error) {
        res.json({ message: "jeton not valide" })

    }

}
module.exports = { portect }