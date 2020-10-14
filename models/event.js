module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
    });

    Event.associate = function(models) {
        Event.hasMany(models.Guests, models.Requests, {
            onDelete: "cascade"
        });
    };

    return Event;
};