module.exports = function(sequelize, DataTypes) {
    var Requests = sequelize.define("Requests", {
        guestName: {
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