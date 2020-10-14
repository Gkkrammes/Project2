module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
    });
}