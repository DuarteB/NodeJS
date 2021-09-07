const app = require('./config/server')

// const rotaNoticias = require('./app/routes/noticias')(app)

// const rotaHome = require('./app/routes/home')(app)

// const rotaForm = require('./app/routes/formulario_inclusao_noticia')(app)

app.listen(3000, function(){
    console.log('Inicio do server')
})
