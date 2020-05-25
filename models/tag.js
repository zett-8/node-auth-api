'use strict'
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      tag_name: DataTypes.STRING,
    },
    {}
  )
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Article, {
      through: 'ArcTag',
      as: 'articles',
      foreignKey: 'article_id',
    })
  }
  return Tag
}
