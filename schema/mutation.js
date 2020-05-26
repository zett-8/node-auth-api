const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql')
const GenreType = require('./types/genre')
const Genre = require('../models').Genre

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => {
    return {
      addGenre: {
        type: GenreType,
        args: {
          genre_name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parentValue, { genre_name }) {
          return Genre.create({ genre_name })
        },
      },

      deleteGenre: {
        type: GenreType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parentValue, { id }) {
          return Genre.destroy({ where: { id } })
        },
      },
    }
  },
})
