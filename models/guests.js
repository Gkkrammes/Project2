module.exports = function(sequelize, DataTypes) {
    var Guests = sequelize.define("Guests", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        confirmed: DataTypes.BOOLEAN
    });

    Guests.associate = function(models) {
        Guests.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Guests;
};