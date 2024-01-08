const applicationRoutes = require('../routes/applicationRoutes');
async function RoutesDBControll(server){
server.get("/empresas",applicationRoutes.getAll);
server.get("/empresas/:empresaId", applicationRoutes.getOne);
 server.post("/empresas/create",applicationRoutes.createEmpresa);
 server.put("/empresas/:empresaId",applicationRoutes.updateEmpresa);
 server.delete("/empresas/:empresaId",applicationRoutes.deleteEmpresa);
}

module.exports= RoutesDBControll