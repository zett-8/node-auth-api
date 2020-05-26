const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql')
const Article = require('../../models').Article

module.exports = new GraphQLObjectType({
  name: 'GenreType',
  allowedRoles: ['admin.all', 'user.read'],
  fields: () => ({
    id: { type: GraphQLID },
    genre_name: { type: GraphQLString },
    articles: {
      type: new GraphQLList(require('./article')),
      resolve(parentValue) {
        return Article.findAll({ where: { genre_id: parentValue.id } })
      },
    },
  }),
})
