const graphql = require('graphql')
const { GraphQLSchema } = graphql
const query = require('./query')

module.exports = new GraphQLSchema({
  query,
})
