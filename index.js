const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log('Server is now running!');

    if (req.url === 'favicon.ico') return;

    console.log(req.url);

    const myURL = new URL(req.url, `http://${req.headers.host}/`);
    const pathname = myURL.pathname;
    const id = myURL.searchParams.get('id');

    console.log(req.headers);
    console.log(pathname, id);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Bicycle Shop</h1>');
});


server.listen(3000);