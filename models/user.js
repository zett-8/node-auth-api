'use strict';

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    instanceMethods: {
        generateHash(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
      }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate(() => {
    User.password = User.generateHash(User.password)
  })
  User.beforeUpdate(() => {
    User.password = User.generateHash(User.password)
  })

  return User;
};
