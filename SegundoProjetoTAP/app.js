//o http acessa a creatServer (função para construção do servidor)
var http = require ('http')

http.createServer(function(req, res){
    //res.send envia uma mensagem p o navegador web
    res.end("Mensagem direcionada")
}).listen(8081)//listen é uma porta padrão 8081

console.log("Servidor está ativo")

