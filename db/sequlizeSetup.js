// confignDB
const { Sequelize } = require('sequelize');
const CowokingModel = require('../models/coworkingsModles')
const mokcoworkings = require('../db/coworkings')
const Users = require("../db/users")
const UsersModel = require("../models/usersModels")
const bcrypt = require("bcrypt");


const sequelize = new Sequelize('bx-coworkings', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false
});

const Coworking = CowokingModel(sequelize)


sequelize.sync({ force: true })
  .then(() => {
    mokcoworkings.forEach(coworking => {
      Coworking.create(coworking)

        .then()
        .catch(error => {
          console.log(error)
        })
    })
  })
  .catch((error) => {
    console.log(error);
  })

//table de users

const User = UsersModel(sequelize)

sequelize.sync({ force: true })
  .then(() => {
    Users.forEach(async user => {
      const hashPassword = await bcrypt.hash(user.password, 10)
      user.password = hashPassword
      User.create(user)
        .then()
        .catch(error => {
          console.log(error)
        })
    })
  })
  .catch((error) => {
    console.log(error);
  })
sequelize.authenticate()
  .then(() => console.log('La connexion à la base de données a bien été établie.'))
  .catch(error => console.error(`Impossible de se connecter à la base de données, ${error}`))


//   const myFunction = (name) => {
//     console.log('hello ' + name)
// }
module.exports = { sequelize, Coworking, User }