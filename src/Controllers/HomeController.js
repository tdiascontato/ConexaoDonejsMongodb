const HomeModel = require('../Models/HomeModel.js')
HomeModel.create({
    titulo: 'Título do Ti²',
    descricao: 'Descrição do Ti²'
}).then(dados => console.log(dados)).catch(e => console.log(e));
exports.PaginaInicial = (req, res) =>{
    res.render('index');
};
exports.Post = (req, res,next) =>{
    res.send(`Bem vindo ao sistema, ${req.body.pessoa}`);
    next();
};