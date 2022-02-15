const { buildSubgraphSchema } = require('@apollo/subgraph');
const { ApolloServer, gql } = require ('apollo-server-lambda');

const products = [
    {
        upc: 'a1',
        name: 'latte',
        price: 3
    },
    {
        upc: 'a2',
        name: 'macchiato',
        price: 4
    },
    {
        upc: 'a3',
        name: 'mocha',
        price: 5
    }
];


const typeDefs = gql`
    type Review{
        product: Product
    }

    extend type Product @key(fields: "upc"){
        upc: String! @external
    }

`;

const resolvers = {
    Review: {
        product(review){
            return {__typename: "Product", upc: review.upc}
        }
    }
};

const server = new ApolloServer({
    schema: buildSubgraphSchema({typeDefs, resolvers})
    });

exports.reviewsHandler = server.createHandler();