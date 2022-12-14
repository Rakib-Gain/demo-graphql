const {gql} = require('apollo-server-express')

const typeDefs = gql`
    
    type Order {
        _id: ID!
        userName: String!
        itemName: String!
        price: Int!
    }
    type Query {
        hello: String,
        getOrders: [Order],
        getSingleOrder(id: ID): Order
    }
    
    input  OrderInput {
        userName: String!
        itemName: String!
        price: Int!
    }
    type Mutation {
        createOrder(details:OrderInput): Order
    }
`

module.exports = typeDefs
