const mySql = require('mysql');

module.exports = function(){
    
    return mySql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'casadocodigo_nodejs' 
    });
}