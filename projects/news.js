const http = require('http');

const server = http.createServer( function(req, res){
    
    const categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end('<html><body>Tecnologia</body></html>');
    } else if (categoria == '/moda'){
        res.end('<html><body>Moda</body></html>');
    } else {
        res.end('<html><body>Portal de Noticia</body></html>');
    }
});

server.listen(3000)