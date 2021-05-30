let express=require('express');
let router =express.Router();

router.get('/',(req,res) =>{
    res.render('shop-single');
});
router.get('/cart',(req,res)=>{
    res.render('cart')
})
module.exports =router;