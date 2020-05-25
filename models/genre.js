'use strict'
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      genre_name: DataTypes.STRING,
    },
    {}
  )
  Genre.associate = function (models) {
    Genre.hasMany(models.Article, {
      foreignKey: 'genre_id',
      as: 'articles',
    })
  }
  return Genre
}
