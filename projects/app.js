const express = require('express');
const app = express()

app.get('/', function(req, res){
    res.send('<html><body>Portal de Notícias</body></html>')
})

app.get('/moda', function(req, res){
    res.send('<html><body>Portal de Modas</body></html>')
})

app.listen(3000, function(){
    console.log('Servidor rodando com Express')
})
