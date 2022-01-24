function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	console.log(id_noticia.id_noticia);
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	this._connection.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
	return NoticiasDAO;
}
// class Noticias {
//     constructor(connection) {
//         this._connection = connection;
//     }

//     getNoticias = (callback) => {
//         this._connection.query('select * from noticias', callback);
//     };

//     getNoticia = (callback) => {
//         this._connection.query('select * from noticias where id_noticia = 1', callback)
//     }

//     salvarNoticia = (noticia, callback) => {
//         this._connection.query('insert into noticias set ?', noticia, callback)
//     }
// }

module.exports = function(){
    return NoticiasDAO;
}
