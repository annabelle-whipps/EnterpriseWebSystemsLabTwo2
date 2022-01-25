var http = require("http");

http.createServer(function (request, response) {
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	response.end('Hello World\n');

}).listen(3000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('The app is runiing on port ${ PORT }');
	