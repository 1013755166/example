let express =require('express');
let router =express.Router();
var mysql =require('mysql');
let User =require('./bean/user');
router.get('/',(req,res) =>{
    res.render('register');
});

router.post('/',(req,res) =>{
   // 获取前端传递的参数,放入对象
  let user = new User(req.body.user_name,req.body.user_pass);
  var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'lgl',
    port:3306
   });
   connection.connect();
   var query="insert denglu(name,pass)values('"+user.user_name+"','"+user.user_pass+"')"
   connection.query(query,(err,result)=>{
       res.render('lgl');
   })
   connection.end();
});

module.exports =router;