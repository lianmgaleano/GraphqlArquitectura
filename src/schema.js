import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        book(_id: ID): Book
        books: [Book]
    }

    type Mutation {
        createBook(input: BookInput): Book
        updateBook(_id: ID, input: BookInput): Book
        deleteBook(_id: ID): Book
    }

    type Book {
        _id: ID
        title: String
        description: String
        topic: String
        author: String
    }

    input BookInput {
        title: String
        description: String
        topic: String
        author: String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});