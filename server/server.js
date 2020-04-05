const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greetings: String
  }
`;

const resolvers = {
  Query: {
    greetings: () => "Welcome to GraphQL!!!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server is running at ${url}`));
