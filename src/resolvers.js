const OrderModel = require('./models/Order.Model')

const resolvers =  {
    Query: {
        hello: () => {
            return 'hello Graphql Got'
        },
        getOrders: async () => {
            const order = await OrderModel.find({})

            return order
        },
        getSingleOrder: async (parent ,{id}, context,info) => {
            const singleOrder = await OrderModel.findById(id)

            return singleOrder
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
        },
    }
}

module.exports = resolvers