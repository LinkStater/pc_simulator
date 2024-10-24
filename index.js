const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const path = require("path");
const db = new sqlite3.Database("nao_abrir/Database.sqlite");

app.use(express.json());
app.use(express.static(path.join(__dirname, "pages")));

// Rota principal
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// Rota de login
app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/pages/login.html"));
});

//Rota de cadastro
app.get("/cadastrar", function (req, res) {
    res.sendFile(path.join(__dirname + "/pages/cadastro.html"));
});




// Tabela de usuários
function tabela(){
    var sql =
        "CREATE TABLE LOGIN (ID INTEGER PRIMARY KEY AUTOINCREMENT, USUARIO VARCHAR(100), EMAIL VARCHAR(100), SENHA VARCHAR(100));";

    db.run(sql, (err) => {
        if (err) console.log(err);
        else console.log("Tabela criada com sucesso!");
    });
}








app.post("/enviar", function (req, res) {


console.log(req.body)

    
if(req.body.email == "admin" && req.body.senha == "123") res.send("Sucesso!");
else res.send("Erro!");




    
});







app.post("/outronome", function (req, res) {


console.log(req.body)



    var sql = "INSERT INTO LOGIN (USUARIO, EMAIL, SENHA) VALUES (?, ?, ?);";

    var x = {
        usuario: req.body.usuario,
        email: req.body.email,
        senha: req.body.senha,
        data: Date.now()
    }

    db.run(sql, [req.body.usuario, req.body.email, req.body.senha], function (err) {
        if (err) {
            console.log(err);
            res.send("Erro ao cadastrar");
            }
        else {
            console.log("Dados inseridos com sucesso!");
            res.send("Dados inseridos com sucesso!");
        }
    });




});



         

//tabela();







app.listen(4080, console.log("run..."));