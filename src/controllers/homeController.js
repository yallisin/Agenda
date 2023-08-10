const HomeModel = require('../models/HomeModel');
const Contato = require('../models/ContatoModel')

HomeModel.create({
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.index = async (req, res)  => {
    const contatos = await Contato.buscaContatos();
    res.render('index', {contatos});
    return;
    
};
