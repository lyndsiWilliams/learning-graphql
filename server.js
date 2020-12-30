// Package imports
const express = require('express');
const expressGraphQL = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

// Express app creation
const app = express();

// GraphQL schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World'
      }
    })
  })
})

// Bringing in graphql as middleware - this is where the magic happens
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true  // User interface to access GraphQL (like Postman)
}))

// Port assignment and bringing the server to life
port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is alive!'))