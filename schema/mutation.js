const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')
const GenreType = require('./types/genre')
const Genre = require('../models').Genre

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addGenre: {
      type: GenreType,
      args: {
        genre_name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { genre_name }) {
        return Genre.create({ genre_name })
      },
    },
  }),
})
