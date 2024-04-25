const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    return sequelize.define(
        'User',

        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {

                    msg: "your name  existe déjà",
                },
                validate: {
                    len: {
                        msg: "le nom dois avoir un nombre de caractéres compri entre 3 et 50",
                        args: [3, 50]
                    }
                }
            },

            password: {
                type: DataTypes.STRING
            }


        }
    )
}
