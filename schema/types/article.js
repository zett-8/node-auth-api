const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')
const Genre = require('../../models').Genre

module.exports = new GraphQLObjectType({
  name: 'ArticleType',
  fields: () => ({
    id: { type: GraphQLID },
    article_name: { type: GraphQLString },
    article_content: { type: GraphQLString },
    genre: {
      type: require('./genre'),
      resolve(parentValue) {
        return Genre.findByPk(parentValue.genre_id)
      },
    },
  }),
})
