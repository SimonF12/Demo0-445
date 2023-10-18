
var http = require('http');
var fs = require('fs'); //file system module
const port = 8080;
const server = http.createServer(function(req, res) {
fs.readFile('Sample.html', function(err, data) {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(data);
return res.end();
});
}); // .listen(8080);
server.listen(port, function() {
console.log('Server listening at port ' + port);
});