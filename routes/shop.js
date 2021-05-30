let express=require('express');
let router =express.Router();
var db=require('./db/cc')

router.get('/',(req,res) =>{
    db.sql('select * from tab_product',(err,rows)=>{
        res.render('shop1',{data:rows});
    })
    
 });
module.exports =router;