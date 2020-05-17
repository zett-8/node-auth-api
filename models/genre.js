'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genre_id: DataTypes.INTEGER,
    genre_name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    Genre.hasMany(models.Article, {
      foreignKey: 'article_id',
      as: 'articles'
    })
  };
  return Genre;
};
