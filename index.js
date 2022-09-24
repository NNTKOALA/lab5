//khai báo module express framework
const express = require('express');
const app = express();
//khai báo module path => để set đường dẫn thư mục chứa view 
const path = require('path');

// khao báo server port
const port = process.env.PORT || 3000;

//set thư mục chứa view
app.set("views", path.join(__dirname, 'views'));

//set view engine (template engine)
//=> giúp gõ code của back-end ngay trogn front-end dễ hơn
//hbs: handle bar => nếu dùng view engine khác thì thay đổi giá trị này
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    var name = "Cloud Computing";
    var code = 1644;
    var semeter = "Fall 2022";
    res.render('index', {name : name, code : code, semeter : semeter});
})

app.get("/mobile", (req, res) => {
    res.render("mobile");
  });
  
app.get("/laptop", (req, res) => {
    res.render("laptop");
  });

//listen port để chạy server
app.listen(port);