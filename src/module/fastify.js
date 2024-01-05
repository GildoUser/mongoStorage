const fastify = require('fastify');
const dotenv = require('dotenv');
dotenv.config();
const server = fastify();
const RoutesDBControll = require("../controllers/Controller")
server.register(RoutesDBControll)

server.listen({
    port: process.env.PORT || 3200
})