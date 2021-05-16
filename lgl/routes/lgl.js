const { clearCache } = require('ejs');
let express =require('express');
var mysql =require('mysql');
let router =express.Router();

router.get('/',(req,res) =>{
    res.render('lgl');
});

router.post('/lgl',(req,res) =>{
    let user_name =req.body.user_name;
    let user_pass = req.body.user_pass;
    var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'lgl',
        port:3306
       });
       connection.connect();
    var query ="select name,pass from denglu where name='"+user_name+"'and pass='"+user_pass+"'";
    connection.query(query,(err,result,fields)=>{
        var u=result[0];
        if(!u){
            res.json({"s":-1});
        }else{
            res.render('index')
        }
    })
    connection.end();
});
module.exports =router;