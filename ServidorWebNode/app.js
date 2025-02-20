const express = require("express")//usando constante não mutavel do pacote express
const app = express()//criando a constante app 

app.get("/Testando", function(req, res){//criando rota
    res.send("Seja bem vindo ao Node.js")//função para enviar mensagem pra rota
})

app.get("/contato", function(req, res){
    res.send("Página de Contato")
})

app.get("/produtos/:item", function(req, res){
    res.send("Item: " + req.params.item)
})

app.get("/produtos/:item/:quantidade", function(req, res){
    res.send("Item: " + req.params.item + "<br>Quantidade: " +req.params.quantidade)
})

app.get("/TestandoDir",function (req, res){
    res.sendFile(__dirname + "/html/index.html")//dirname localiza o diretorio em que o arquivo se encontra que nesse caso é ServidorWebNode
})

app.listen(8081, function(){//criando o servidor web com a porta padrão 8081
    console.log("Servidor web rodando na porta 8081")
})