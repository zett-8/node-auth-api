const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')
const ArticleType = require('./types/article')
const GenreType = require('./types/genre')
const Genre = require('../models').Genre
const Article = require('../models').Article

module.exports = new GraphQLObjectType({
  name: 'rootQuery',
  fields: () => ({
    genre: {
      type: GenreType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Genre.findByPk(id)
      },
    },
    genres: {
      type: new GraphQLList(GenreType),
      resolve() {
        return Genre.findAll()
      },
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve() {
        return Article.findAll()
      },
    },
  }),
})
