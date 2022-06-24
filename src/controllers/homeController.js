const HomeModel = require('../models/HomeModel');

/*
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
*/

HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};