let db = require('../db/db')
async function printHello(request,reply){
    console.log('Hello Fastify; Hello Node; Hello World!')
    reply.send({"hello":'World...'})
}

async function getAll(request,reply){
    reply.send(db)
}

async function getOne(request,reply){
    const empresaId= request.params.empresaId
    for(let i=0; i < db.length; i++){
        if(db[i].id == empresaId){
            reply.send(db[i])
        }
    }

}

async function updateEmpresa(request,reply){
    const empresaId = request.params.empresaId
    console.log(empresaId)
    for(let i = 0; i < db.length; i++){
        if(db[i].name==empresaId){
            db[i] = {...request.body}
            reply.send(201)
            return
        }
    }
    }

async function createEmpresa(request,reply){
    db.push({...request.body})
    console.log(db)
    reply.send(db)
}

async function deleteEmpresa(request,reply){
    let arr =[];
    const empresaId = Number(request.params.empresaId);
    for(let i=0; i < db.length; i++){
        if(db[i].id == empresaId){
            const leftSide = db.slice(-db.length,i)
            const rightSide = db.slice(i+1)
            if(!leftSide.length){
                console.log('é 0')
                arr.push(...rightSide)
            }
            else{
                arr.push(...leftSide,...rightSide)
            }
            db = arr
            reply.send(204)

        }
    }
}
module.exports = {
    printHello,
    getOne,
    getAll,
    updateEmpresa,
    createEmpresa,
    deleteEmpresa
}