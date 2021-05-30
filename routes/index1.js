let express=require('express');
let router =express.Router();
var db=require('./db/cc');

/*显示*/
router.get('/',(req,res) =>{
    db.sql('select * from tab_admin',(err,rows)=>{
        console.log(rows);
        res.render('index1',{datas:rows});
    })
    
 });
/*増*/
router.post('/',(req,res)=>{
    let id1=req.body.id1
    let name1=req.body.name1
    let num=req.body.num
    let phone=req.body.phone
    let age=req.body.age
    ss="insert tab_admin(id,name,num,phone,age)values('"+id1+"','"+name1+"','"+num+"','"+phone+"','"+age+"')"
    db.sql(ss,(err,rows)=>{
        if (err) {
             console.log(err);
        } else {
            res.redirect('/index1');
        }
        
    })
})
/*删*/
router.get('/del/:id', function (req, res) {
    let id = req.params.id;
    db.sql("delete from tab_admin where id=" + id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/index1');
        }
    });
});
/*修改*/
router.get('/update/:id', function (req, res) {
    var id = req.params.id;
    db.sql("select * from tab_admin where id=" + id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            console.log(rows);
            res.render('update',{data:rows});
        }
    });
});
router.post('/update', function (req, res) {
    let name = req.body.name;
    let id= req.body.id;
    let num=req.body.num;
    let phone=req.body.phone;
    let age = req.body.age;
    console.log(req.body.name)
    sl="update tab_admin set name='" + name + "',age='" + age + "',num='"+num+"',phone='"+phone+"',id='"+id+"' where id=" + id
    db.sql(sl, function (err, rows) {
        console.log(rows);
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/index1');
        }
    });
});
module.exports =router;