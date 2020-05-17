'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArcTag = sequelize.define('ArcTag', {
    tag_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER
  }, {});
  ArcTag.associate = function(models) {
    // associations can be defined here
  };
  return ArcTag;
};