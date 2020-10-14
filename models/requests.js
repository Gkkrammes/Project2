module.exports = function(sequelize, DataTypes) {
    var Requests = sequelize.define("Requests", {
        name: DataTypes.STRING,
        confirmed: DataTypes.BOOLEAN
    });
}