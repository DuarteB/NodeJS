var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

    var connection = dbConnection();

    app.get('/noticias', function(req, res){

        connection.query('select * from noticias', function(error, result) {
            // if (error) {
            //     throw console.log(error);
            // } else {
            //     res.render("noticias/noticias", { noticias : result});
            // }
            try {
                res.render('noticias/noticias', { noticias : result} )
              } catch (error) {
                console.error(error);
              }
        })
    })
}
