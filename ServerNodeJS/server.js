//server.js
const {
     localStorage
} = require("node-localstorage");
const exp = require("express");
var modelUsers = require('./models/user');
var modelProducts = require('./models/product');
const fs = require('fs');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
var cors = require('cors');
const {
     verify
} = require("crypto");
const { ppid } = require("process");
const app = exp();
const port = 3000;
const PRIVATE_KEY = fs.readFileSync('private-key.txt');
const nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
     res.send("<h1>Đây là trang home</h1>");
});
app.get('/getCategories', (req, res) => {
     modelProducts.cateList((listCategory) => {
          res.send(listCategory);
     })
})
app.get('/getProducts', (req, res) => {
     modelProducts.list((listProduct) => {
          res.send(listProduct);
     })
})
app.get('/getProductsByCategory/:id', (req, res) => {
     const id = req.params.id;
     modelProducts.list((listProduct) => {
          const listProductByCategory = listProduct.filter((item) => {
               return item.ma_pl == id
          })
          res.send(listProductByCategory)
     })
})
sendMail = async (receipEmail, token) => {
     let transporter = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
               user: '7dc0dea516a860', // generated ethereal user
               pass: 'cf5662486c7366', // generated ethereal password
          },
     });
     let info = await transporter.sendMail({
          from: 'dao.hoanglinh3211@gmail.com', // sender address
          to: receipEmail, // list of receivers
          subject: "Verify ✔", // Subject line
          text: 'http://127.0.0.1:5500/verifyEmail.html?token=' + token, // plain text body
          html: '<b>http://127.0.0.1:5500/verifyEmail.html?token=' + token + '</b>', // html body
     });
     console.log(info)
}

app.post('/userRegister', (req, res) => {
     existed = 0
     modelUsers.list((listUser) => {
          listUser.forEach(user => {
               if (req.body.email == user.email) {
                    existed++
               }
          });

          if (existed > 0) {
               res.sendStatus(403)
          } else {
               var today = new Date();
               var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
               var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
               var dateTime = date + ' ' + time + ' ' + req.body.email;
               req.body.id_nd = crypto.createHash('sha1').update(dateTime).digest('hex');
               req.body.mat_khau = crypto.createHash('sha1').update(req.body.mat_khau     ).digest('hex');

               sendMail(req.body.email, req.body.id_nd)
               modelUsers.create(req.body)
               res.sendStatus(200)
          }
     })
})
app.post('/login', (req, res) => {
     const em = req.body.email
     const pw = req.body.mat_khau

     modelUsers.list((listUser) => {
          // 0 => successful
          // 1 => not exist
          // 2 => not activated yet

          let check = 1

          listUser.forEach(user => {
               if (em == user.email && crypto.createHash('sha1').update(pw).digest('hex') == user.mat_khau) {
                    check = 2
                    if (user.kich_hoat) {
                         check = 0
                    }
               }
          });

          switch (check) {
               case 1:
                    res.sendStatus(404)
                    break;
               case 2:
                    res.sendStatus(403)
                    break;
               default:
                    res.sendStatus(200)
                    break;
          }
     })
})
app.post('/verify', (req, res) => {
     modelUsers.list((listUser) => {
          let check = false

          listUser.forEach(user => {
               if (req.body.token == user.id_nd && !user.kich_hoat) {
                    check = true
                    modelUsers.update(user.id_nd, { kich_hoat: 1 })
               }
          })

          if (check) {
               res.sendStatus(200)
          } else {
               res.sendStatus(401)
          }
     })
})

app.listen(port, () => {
     console.log('Server started on port ' + port);
})