var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Cours4'
});

connection.connect();

connection.query('SELECT r.name FROM recipe r', function (error, results, fields) {
  if (error) throw error;
  console.log("\nRecette :");
  for (var i = 0; i < results.length; i++) {
    console.log(" ", results[i].name);
  }
  //console.log('The solution is : ', results);

});
connection.end();
