'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    article_name: DataTypes.STRING,
    article_content: DataTypes.TEXT,
    genre_id: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    Article.belongsTo(models.Genre, { foreignKey: 'genre_id'})
    Article.belongsToMany(models.Tag, {
      through: 'ArcTag',
      as: 'tags',
      foreignKey: 'tag_id'
    })
  };
  return Article;
};
