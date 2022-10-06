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
        updateOrder: async (parent ,args, context,info) => {
            const {id} = args
            const {userName,itemName,price} = args.details
            const updateData = {}

            const existOrder = await OrderModel.findById(id)

            if(!existOrder) throw new Error('Order not found')

            if(userName){
                updateData.userName = userName
            }
            if(itemName){
                updateData.itemName = itemName
            }
            if(price){
                updateData.price = price
            }
            console.log(updateData)

            await OrderModel.updateOne(
                {_id: id},
                updateData
            )

            const updatedOrder = OrderModel.findById(id)

            return updatedOrder
        }
    }
}

module.exports = resolvers