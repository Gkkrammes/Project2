module.exports = function(sequelize, DataTypes) {
    var Request = sequelize.define("Request", {
        guest: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        request: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });

    Request.associate = function(models) {
        Request.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Request;
}