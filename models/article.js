'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    article_id: DataTypes.INTEGER,
    article_name: DataTypes.STRING
  }, {});
  Article.associate = function(models) {
    Article.belongsTo(models.Genre)
    Article.belongsToMany(models.Tag, {
      through: 'ArcTag',
      as: 'tags',
      foreignKey: 'tag_id'
    })
  };
  return Article;
};
