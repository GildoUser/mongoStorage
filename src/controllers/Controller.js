const applicationRoutes = require('../routes/applicationRoutes');
async function RoutesDBControll(server){
server.get("/",applicationRoutes.printHello);
}

module.exports= RoutesDBControll