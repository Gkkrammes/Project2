module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        type: DataTypes.STRING,
    });

    Event.associate = function(models) {
        Event.hasMany(models.Guests, models.Requests, {
            onDelete: "cascade"
        });
    };

    return Event;
};