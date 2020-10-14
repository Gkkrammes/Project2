module.exports = function(sequelize, DataTypes) {
    var Requests = sequelize.define("Requests", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        confirmed: DataTypes.BOOLEAN
    });

    Requests.associate = function(models) {
        Requests.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Requests;
}