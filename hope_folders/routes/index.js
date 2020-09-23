var express = require('express');
var router = express.Router();
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password!',
  database: 'users'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})
const query = `SELECT * from users LIMIT 10`;

connection.query(query, (err, results) => {
  if (err) throw err;
  console.log(results);
});
db.all(query, (err, row) => {
  if (err) throw err;
  console.log(row);
});

/* GET home page. */

router.get('/users/:id', function(req, res, next) {
  //get object that matches the id
  let person = users.id.find(peep => {
    return peep.id === parseInt(req.params.id);
  });
  //render the template users//
  res.render('index', { users });
});
module.exports = router;
