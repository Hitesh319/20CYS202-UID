var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "project"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Saffron", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT * FROM Saffron_Quality_Certificate", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT * FROM Farmer", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT * FROM Sustainability_Certificate", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT * FROM Batch", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT * FROM Farm", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});