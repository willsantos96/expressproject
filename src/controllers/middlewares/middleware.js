exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log('Aqui está mais um middleware');
    next();
};



// module.exports = (req, res, next) => {


    /*
            if (req.body.cliente) {
                req.body.cliente = req.body.cliente.replace('William', 'NÃO PERMITIDO USAR ESSE NOME');
                console.log();
                console.log(` Você enviou ${req.body.cliente} `);
                console.log();
            }
            next();
        
    */
// };

