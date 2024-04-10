var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database:'cs370 project'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});