    var http = require('http');
    var port = 8080;
        const server = http.createServer(function(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<p>Hi there! </p>");
            res.end('<p>You are getting this text from a web server!</p>');
});
    server.listen(port, function() {
        console.log('Server listening at port ' + port);
});