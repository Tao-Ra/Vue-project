const mysql = require('mysql');
// 连接数据库
let db = mysql.createPool(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'zzq_wyq',
        maxConnection: 5
    }
)
const express = require('express');
const bodyParser = require('body-parser');
let server = express();
server.listen(8090);

server.use(bodyParser.urlencoded({
    extended: true
}));

server.post('/api', (req, res) => {
    // console.log(req.body);
    if (req.body.how == 'login') {  
        if(!req.body.user){
            res.write('{"err": 1, "msg": "user is required"}');
            res.end();
          }else if(!req.body.pwd){
            res.write('{"err": 1, "msg": "pass is required"}');
            res.end();
          }else if(!/^\w{8,10}$/.test(req.body.user)){
            res.write('{"err": 1, "msg": "invaild username"}');
            res.end();
          }else if(/['|"]$/.test(req.body.pass)){
            res.write('{"err": 1, "msg": "invaild password"}');
            res.end();
          }else{
            insert(req.body.user, req.body.pwd);
            res.write('{"err": 0, "msg": "success"}');
            res.end();
          }
    } else if (req.body.how == 'reset') {
        // 查询数据
        db.query("select id,user,pass,code from login where user='" + req.body.user + "'", (err, data) => {   
            console.log(err)
            if (err==null) {
                res.write('{"err": 1, "msg": "你的账户输入有误！！！"}');
                res.end();
            } else {
                // console.log(data[0].pwd == req.body.oldPwd)
                for (let i = 0; i < data.length; i++) {
                    if (data[i].pass == req.body.oldPwd && req.body.newPwd == req.body.confirmPwd) {
                        res.write('修改成功');
                        res.end();
                        update(req.body.newPwd, req.body.user);
                    }
                }
            }        
        });
    }
})
function insert(user, pass) {
    // 插入数据  
    db.query("INSERT INTO login (id,user,pass,code) values ('','" + user + "','" + pass + "','')", (err, data) => {
        if (err) {
            console.log('error' + err);
        } else {
            // console.log(data);  
        }
    });
}
function update(newPwd, User) {
    db.query("UPDATE login SET pass = '" + newPwd + "' WHERE user = '" + User + "'")
    // UPDATE login SET pass = '123456' WHERE user = '啦啦啦啦'
}