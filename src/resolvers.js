const OrderModel = require('./models/Order.Model')

const resolvers =  {
    Query: {
        hello: () => {
            return 'hello Graphql Got'
        }
    },
    Mutation: {
        createOrder: async (parent ,args, context,info) => {
            const {userName,itemName,price} = args.details
            const order = await OrderModel.create({
                userName,
                itemName,
                price
            })

            return order
        }
    }
}

module.exports = resolvers