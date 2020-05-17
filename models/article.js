'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    article_name: DataTypes.STRING,
    article_content: DataTypes.TEXT,
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Article.associate = function(models) {
    Article.belongsTo(models.Genre, { foreignKey: 'genre_id', as: 'genre'})
    Article.belongsToMany(models.Tag, {
      through: 'ArcTag',
      as: 'tags',
      foreignKey: 'tag_id'
    })
  };
  return Article;
};
