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

    input  updateOrderInput {
        userName: String
        itemName: String
        price: Int
    }
    
    type Mutation {
        createOrder(details:OrderInput): Order,
        updateOrder(details: updateOrderInput,id: ID): Order
        deleteOrder(id: ID): String
    }
`

module.exports = typeDefs
