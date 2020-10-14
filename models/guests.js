module.exports = function(sequelize, DataTypes) {
    var Guests = sequelize.define("Guests", {
        name: DataTypes.STRING,
        confirmed: DataTypes.BOOLEAN
    });
}