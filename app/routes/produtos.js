const connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
    app.get('/produtos', function(req, res){
        
        const connection = connectionFactory();

        connection.query('select * from produtos', function(err, result){
            res.render('./produtos/lista',{lista:result});
        });
        connection.end();
    });
}