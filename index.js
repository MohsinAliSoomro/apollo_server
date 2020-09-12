const { ApolloServer, gql } = require("apollo-server");

const students = [
  {
    id: 1,
    name: "Mohsin",
    email: "mohsin@gmail.com",
    age: 12,
  },
  {
    id: 2,
    name: "Ali",
    email: "Ali@gmail.com",
    age: 13,
  },
  {
    id: 3,
    name: "Soomro",
    email: "mohsin@gmail.com",
    age: 14,
  },
];

const typeDefs = gql`
  type student {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    student: [student]
  }
`;

const resolvers = {
  Query: {
    student: () => students,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
