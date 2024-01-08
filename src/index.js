require('./module/fastify')
let db = [ 0,1,2,3,4];
let tam = db.length;
let arr=[];
for(let i = 0; i < db.length; i++){
    if(db[i]== 3){

        let parte1 = db.slice(-tam,i)
        let parte2 = db.slice(i+1)
        arr.push(...parte1,...parte2)
    }
}
console.log(arr)