var level = require('level');    
var path = require('path');
//var dbPath = process.env.DB\_PATH || path.join(\_\_dirname, 'mydb');    
var db = level("mydb");






module.exports = db;
