// 1 verifione que l'utilisateur qui tente de se connecter existe bien dans la bdd
// 2 s'il n'exite pas , on renvoie une repons
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { User } = require('../db/sequlizeSetup');
const { SECREY_KEY } = require("../configs/privatekey");

const loginFindUser = async (req, res) => {
    try {
        const newUser = await User.findOne({ where: { username: req.body.username } })
        if (newUser === null) {
            return res.json({ message: "Invalid Credentials " })

        }
        // 3 on copare le mot de pass forni dans la fomulaire (dans le req.body)avec le mot de pass countenu  dans le bdd
        const isCorrect = await bcrypt.compare(req.body.password, newUser.password)
        if (!isCorrect) {
            return res.status(404).json({ message: "your password is not correct" })
        }

        const token = jwt.sign({ salut: 'tout le monde' }, SECREY_KEY)
        // Si correct, on envoie un message "login réussi"

        res.cookie('access_token', token).json({ message: "login réussi" })

    }


    catch (error) {
        console.log(error);
        res.status(500).json({ message: `Une erreur est survenue` })
    }
}
//si correct on envoie un message  "login réusi"

module.exports = { loginFindUser }