const { db, DataTypes } = require('../utils/db.utils');

const Meal = db.define('meal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('active', 'deleted'),
    defaultValue: 'active',
  },
});

module.exports = { Meal };
