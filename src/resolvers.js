import Book from './models/Book';

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World with GraphQL'
        },
        greet: (root, { name }) => {
            console.log(name);
            return `Hello ${name}!`;
        },
        async book(_, { _id }) {
            return await Book.findById(_id);
        },
        async books() {
            return await Book.find();
        }
    },
    Mutation: {
        async createBook(_, { input }) {
            const newBook = new Book(input);
            await newBook.save();
            return newBook;
        },
        async updateBook(_, { _id, input }) {
            return await Book.findByIdAndUpdate(_id, input, { new: true });
        },
        async deleteBook(_, { _id }) {
            return await Book.findByIdAndDelete(_id);
        }
    }
};