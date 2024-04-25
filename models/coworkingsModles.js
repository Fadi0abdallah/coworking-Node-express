const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    return sequelize.define(
        'coworking',

        {
            name: {
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

            price: {
                type: DataTypes.JSON,
                validate: {

                    ispriceValid(value) {
                        if (value.hasOwnProperty("hour") && value.hasOwnProperty("day") && value.hasOwnProperty("month")) {
                            if
                                (value.hour === null && value.day == null && value.month == null) {
                                throw new Error("price can't be null unless one")
                            }
                        } else {
                            throw new Error("la syntaxe du prix n'est pas correcte")

                        }

                    }
                },
            },
            address: {
                type: DataTypes.JSON
            },

            superficy: {
                type: DataTypes.TINYINT,
                validate: {
                    isInt: { msg: 'Must superficy an integer number of pennies' },

                }

            },
            capacity: {
                type: DataTypes.TINYINT,
                validate: {
                    isInt: { msg: 'Must capacity an integer number of pennies' },

                }
            },

        })

}