let express=require('express');
let router =express.Router();
router.get('/',(req,res)=>{
    res.render('fk')
});
router.post('/fk',(req,res)=>{
    res.render('fk')
});
module.exports=router;