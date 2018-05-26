const mongoose = require('mongoose');
const http = require('http');
const Schema = mongoose.Schema;
let Team = mongoose.model('Team', TeamSchema);
let db = mongoose.connection;
let dbUrl = 'mongodb://kjgasser:0108C@denc3@ds135750.mlab.com:35750/heroku_xzz0513f';
db.on('error', function () {console.log('error');});
mongoose.connect(dbUrl, function (err) {
if (err) {  return console.log('there was a problem' + err);  }
console.log('connected!');
var team = new Team({ name: 'Kelsey'  });
team.save(function (error, data) {
if (error) {console.log(error);} 
db.close();
process.exit();
});
});