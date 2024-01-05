async function printHello(request,reply){
    console.log('Hello Fastify; Hello Node; Hello World!')
    reply.send({"hello":'World...'})
}

module.exports = {
    printHello
}