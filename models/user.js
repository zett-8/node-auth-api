'use strict';

const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await user.generateHash(user.password)
      },
      beforeUpdate: async (user) => {
        user.password = await user.generateHash(user.password)
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.generateHash = (password) => {
    return bcrypt.hash(password, bcrypt.genSaltSync(8));
  }

  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password).then(re => re)
  }

  return User;
};
