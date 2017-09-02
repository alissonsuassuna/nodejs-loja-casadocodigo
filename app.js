let app = require('./config/express')();
let rotasProdutos = require('./app/routes/produtos.js')(app);

app.listen(3000, function(){
    console.log('servidor rodando');
});