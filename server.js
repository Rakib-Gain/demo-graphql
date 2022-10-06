const mongoose = require('mongoose')
const express = require('express')
const {ApolloServer,gql} = require('apollo-server-express')
const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')


const apollo = async (Ω) => {
    const app = express()

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await mongoose.connect('mongodb+srv://rakib-gain:r9ibr9ib@cluster0.4x5kqlj.mongodb.net/?retryWrites=true&w=majority')

    console.log('connected to database');

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app})

    app.use('/',(req,res) => res.send('Demo server started'))

    app.listen(4001,()=> console.log('Server running on 4001'))

}

apollo()