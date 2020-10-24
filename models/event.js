var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        creatorEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        creatorPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

    });

    Event.associate = function(models) {
        Event.hasMany(models.Request, {
            onDelete: "cascade"
        });
    };

    Event.prototype.validPassword = function(creatorPassword) {
        return bcrypt.compareSync(creatorPassword, this.creatorPassword);
      };

    Event.addHook("beforeCreate", function(event) {
        event.creatorPassword = bcrypt.hashSync(event.creatorPassword, bcrypt.genSaltSync(10), null);
    });


    return Event;
};